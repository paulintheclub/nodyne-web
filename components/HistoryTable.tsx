'use client';

import React from 'react';
import { useDeviceStore } from '@/store/deviceStore';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { HistoryEvent } from '@/store/deviceStore';

const HistoryTable = () => {
  const { history } = useDeviceStore();

  const getBadgeVariant = (type: HistoryEvent['type']) => {
    switch (type) {
      case 'Alert':
        return 'destructive';
      case 'System':
        return 'default';
      default:
        return 'secondary';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.length > 0 ? (
              history.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.timestamp}</TableCell>
                  <TableCell>
                    <Badge variant={getBadgeVariant(event.type)}>{event.type}</Badge>
                  </TableCell>
                  <TableCell>{event.message}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  No events yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default HistoryTable;
