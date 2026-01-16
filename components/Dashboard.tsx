'use client';

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import AlertPanel from "@/components/AlertPanel";
import DeviceStatusCard from "@/components/DeviceStatusCard";
import DeviceControlPanel from "@/components/DeviceControlPanel";
import HistoryTable from "@/components/HistoryTable";
import SerialConnectButton from "@/components/SerialConnectButton";
import TelemetryPanel from "@/components/TelemetryPanel";
import { Card, CardContent } from "@/components/ui/card";
import dynamic from "next/dynamic";

const HeadVisualizer = dynamic(() => import('@/components/HeadVisualizer'), {
  ssr: false,
  loading: () => (
    <div className="flex h-[400px] w-full items-center justify-center">
      <p>Loading 3D model...</p>
    </div>
  ),
});

export default function Dashboard() {
  return (
    <main className="p-4 sm:p-8">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Nodyne</h1>
          <p className="text-muted-foreground">Stay awake. Stay alive.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <SerialConnectButton />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1 space-y-4">
          <DeviceStatusCard />
          <AlertPanel />
          <TelemetryPanel />
          <DeviceControlPanel />
        </div>
        <div className="md:col-span-2 space-y-4">
          <Card>
            <CardContent className="p-4">
              <HeadVisualizer />
            </CardContent>
          </Card>
          <HistoryTable />
        </div>
      </div>
    </main>
  );
}
