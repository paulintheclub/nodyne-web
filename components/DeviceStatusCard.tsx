'use client';

import React from 'react';
import { useDeviceStore } from '@/store/deviceStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DeviceStatusCard = () => {
  const { isConnected, battery, charging } = useDeviceStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between">
          <span>Status</span>
          <Badge variant={isConnected ? 'default' : 'destructive'}>
            {isConnected ? 'Connected' : 'Disconnected'}
          </Badge>
        </div>
        <div className="flex items-center justify-between">
          <span>Battery</span>
          <span>{isConnected ? `${battery}% ${charging ? '(Charging)' : ''}` : 'N/A'}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default DeviceStatusCard;
