import { useDeviceStore } from '@/store/deviceStore';

let port: SerialPort | undefined;
let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
let keepReading = false;

export async function connectSerial() {
  if (!navigator.serial) {
    alert('Web Serial API not supported in this browser.');
    return;
  }

  try {
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 115200 });
    keepReading = true;
    useDeviceStore.getState().connect();
    readLoop();
  } catch (error) {
    console.error('There was an error opening the serial port:', error);
    disconnectSerial();
  }
}

async function readLoop() {
  if (!port?.readable) {
    return;
  }
  
  reader = port.readable.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  let lastAlert = 0;

  while (port.readable && keepReading) {
    try {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }
      
      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split(/\r?\n/);
      buffer = lines.pop() || ''; // Keep the last partial line

      for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine) {
          try {
            const data = JSON.parse(trimmedLine);
            
            switch (data.type) {
              case 'telemetry':
                useDeviceStore.getState().setTelemetry(data);
                break;
              case 'alert':
                useDeviceStore.getState().addHistoryEvent({
                  type: 'Alert',
                  message: data.reasonText,
                });
                break;
              case 'stats':
                useDeviceStore.getState().setStats(data);
                break;
              default:
                // Could be 'INIT' or other messages, we can ignore them for now
                break;
            }
          } catch (e) {
            console.warn('Could not parse JSON from serial:', trimmedLine, e);
          }
        }
      }
    } catch (error) {
      console.error('Error reading from serial port:', error);
      break;
    }
  }
  
  reader.releaseLock();
}

export async function disconnectSerial() {
  keepReading = false;
  
  if (reader) {
    try {
      await reader.cancel();
    } catch(error) {
      console.error("Error cancelling reader", error)
    }
  }

  if (port?.writable) {
    try {
        const writer = port.writable.getWriter();
        await writer.close();
    } catch(error) {
        console.error("Error closing writer", error)
    }
  }

  if (port) {
    try {
      await port.close();
    } catch (error) {
      console.error("Error closing port", error)
    }
    port = undefined;
  }
  
  useDeviceStore.getState().disconnect();
}
