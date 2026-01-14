import { create } from 'zustand';

export interface HistoryEvent {
  timestamp: string;
  type: 'Alert' | 'System';
  message: string;
}

// Matches the "telemetry" type from the device
export interface TelemetryData {
  rollDiff: number;
  pitchDiff: number;
  movement: number;
  roll: number;
  pitch: number;
  micronods: number;
  isAlerting: boolean;
  alertReason: number;
  battery: number;
  charging: boolean;
  maxRollDiff: number;
  avgMovement: number;
}

// Matches the "stats" type from the device
export interface StatsData {
  maxRollDiff: number;
  avgMovement: number;
  totalNods: number;
  baselineRoll: number;
  baselinePitch: number;
}

export interface DeviceState extends TelemetryData, StatsData {
  isConnected: boolean;
  history: HistoryEvent[];
  connect: () => void;
  disconnect: () => void;
  setTelemetry: (data: TelemetryData) => void;
  setStats: (data: StatsData) => void;
  addHistoryEvent: (event: Omit<HistoryEvent, 'timestamp'>) => void;
}

export const useDeviceStore = create<DeviceState>((set) => ({
  // Telemetry Defaults
  isConnected: false,
  rollDiff: 0,
  pitchDiff: 0,
  movement: 0,
  roll: 0,
  pitch: 0,
  micronods: 0,
  isAlerting: false,
  alertReason: 0,
  battery: 0,
  charging: false,

  // Stats Defaults
  maxRollDiff: 0,
  avgMovement: 0,
  totalNods: 0,
  baselineRoll: 0,
  baselinePitch: 0,

  // History
  history: [],

  // Actions
  connect: () => set({ isConnected: true }),
  disconnect: () => set({ isConnected: false, rollDiff: 0, pitchDiff: 0 }),
  setTelemetry: (data) => set(data),
  setStats: (data) => set(data),
  addHistoryEvent: (event) =>
    set((state) => ({
      history: [
        { ...event, timestamp: new Date().toLocaleTimeString() },
        ...state.history,
      ].slice(0, 10),
    })),
}));
