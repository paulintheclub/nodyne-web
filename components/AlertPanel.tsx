'use client';

import React from 'react';
import { useDeviceStore } from '@/store/deviceStore';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const AlertPanel = () => {
  const { isAlerting, alertReason } = useDeviceStore();

  const getAlertConfig = () => {
    if (!isAlerting) {
      return {
        title: 'Status',
        message: 'All systems normal.',
        className: 'border-cyan-500 text-cyan-500',
      };
    }

    switch (alertReason) {
      case 1:
        return { title: 'Alert', message: 'Strong Nod Detected!', className: 'border-red-500 text-red-500' };
      case 2:
        return { title: 'Alert', message: 'Multiple Micro-Nods Detected!', className: 'border-red-500 text-red-500' };
      case 3:
        return { title: 'Alert', message: 'Slow Head Drift Detected!', className: 'border-yellow-500 text-yellow-500' };
      case 4:
        return { title: 'Alert', message: 'No Movement Detected!', className: 'border-yellow-500 text-yellow-500' };
      case 5:
        return { title: 'Alert', message: 'Side Tilt Detected!', className: 'border-yellow-500 text-yellow-500' };
      default:
        return {
          title: 'Alert',
          message: 'Drowsiness Alert!',
          className: 'border-red-500 text-red-500',
        };
    }
  };

  const { title, message, className } = getAlertConfig();

  return (
    <Card className={cn('transition-colors', className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">{message}</p>
      </CardContent>
    </Card>
  );
};

export default AlertPanel;
