'use client';

import React from 'react';
import { useDeviceStore } from '@/store/deviceStore';
import { sendCommand } from '@/lib/serial';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, BarChart3, StopCircle } from 'lucide-react';

const DeviceControlPanel = () => {
  const { isConnected, isAlerting } = useDeviceStore();

  const handleCalibrate = async () => {
    const success = await sendCommand('CALIBRATE');
    if (success) {
      console.log('Calibration command sent');
    }
  };

  const handleStopAlert = async () => {
    const success = await sendCommand('STOP_ALERT');
    if (success) {
      console.log('Stop alert command sent');
    }
  };

  const handleResetStats = async () => {
    const success = await sendCommand('RESET_STATS');
    if (success) {
      console.log('Reset stats command sent');
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Controls</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <Button
          onClick={handleCalibrate}
          disabled={!isConnected}
          variant="outline"
          className="flex flex-col h-auto py-3"
        >
          <Zap className="h-5 w-5 mb-1" />
          <span className="text-xs">Calibrate</span>
        </Button>

        <Button
          onClick={handleStopAlert}
          disabled={!isConnected || !isAlerting}
          variant="destructive"
          className="flex flex-col h-auto py-3"
        >
          <StopCircle className="h-5 w-5 mb-1" />
          <span className="text-xs">Stop Alert</span>
        </Button>

        <Button
          onClick={handleResetStats}
          disabled={!isConnected}
          variant="outline"
          className="flex flex-col h-auto py-3 col-span-2"
        >
          <BarChart3 className="h-5 w-5 mb-1" />
          <span className="text-xs">Reset Statistics</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default DeviceControlPanel;
