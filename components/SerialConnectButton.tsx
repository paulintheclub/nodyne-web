'use client';

import React from 'react';
import { useDeviceStore } from '@/store/deviceStore';
import { connectSerial, disconnectSerial } from '@/lib/serial';
import { Button } from '@/components/ui/button';

const SerialConnectButton = () => {
  const { isConnected } = useDeviceStore();

  const handleClick = async () => {
    if (isConnected) {
      await disconnectSerial();
    } else {
      await connectSerial();
    }
  };

  return (
    <Button onClick={handleClick} variant="outline">
      {isConnected ? 'Disconnect Device' : 'Connect Device'}
    </Button>
  );
};

export default SerialConnectButton;
