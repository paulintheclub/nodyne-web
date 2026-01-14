'use client';

import React from 'react';
import { useDeviceStore } from '@/store/deviceStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const TelemetryPanel = () => {
  const { rollDiff, pitchDiff, movement, micronods } = useDeviceStore();

  // Normalize values for the progress bar (0-100)
  const normalizeAngle = (angle: number, maxAngle: number) => {
    return (Math.abs(angle) / maxAngle) * 100;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Telemetry</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Forward Tilt (Roll)</span>
          <span>{rollDiff.toFixed(2)}°</span>
        </div>
        <Progress value={normalizeAngle(rollDiff, 45)} className="h-2" />

        <div className="flex items-center justify-between">
          <span>Side Tilt (Pitch)</span>
          <span>{pitchDiff.toFixed(2)}°</span>
        </div>
        <Progress value={normalizeAngle(pitchDiff, 45)} className="h-2" />

        <div className="flex items-center justify-between">
          <span>Movement</span>
          <span>{movement.toFixed(2)}</span>
        </div>
        <Progress value={Math.min(movement * 10, 100)} className="h-2" />

        <div className="flex items-center justify-between">
          <span>Micronods</span>
          <span>{micronods}</span>
        </div>
        <Progress value={(micronods / 5) * 100} className="h-2" />
      </CardContent>
    </Card>
  );
};

export default TelemetryPanel;
