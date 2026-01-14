"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, Line, LineChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import Image from "next/image";

const reactionTimeData = [
  { time: "0s", withoutAlert: 3.2, withAlert: 0.8 },
  { time: "2s", withoutAlert: 4.5, withAlert: 1.2 },
  { time: "4s", withoutAlert: 6.8, withAlert: 1.5 },
  { time: "6s", withoutAlert: 9.2, withAlert: 1.8 },
  { time: "8s", withoutAlert: 12.5, withAlert: 2.1 },
]

const detectionData = [
  { group: "With Nodyne", episodes: 12.4, detected: 11.8, prevented: 11.1 },
]

const chartConfig = {
  withoutAlert: { label: "Without Alert", color: "hsl(var(--muted))" },
  withAlert: { label: "With Alert", color: "hsl(var(--chart-1))" },
  episodes: { label: "Total Episodes", color: "hsl(var(--chart-4))" },
  detected: { label: "Detected by Nodyne", color: "hsl(var(--chart-2))" },
  prevented: { label: "Prevented by Nodyne", color: "hsl(var(--chart-1))" },
}

export function DataVisualization() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-balance">Real-World Performance</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-balance">
            Data from extensive testing shows dramatic improvements in driver response times.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Reaction Time Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-card border-border h-full">
              <h3 className="text-2xl font-bold mb-6">Reaction Time Comparison</h3>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={reactionTimeData} margin={{ left: -20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: "Seconds", angle: -90, position: "insideLeft", offset: -10 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="withoutAlert" stroke="var(--color-withoutAlert)" strokeWidth={3} name={chartConfig.withoutAlert.label} />
                    <Line type="monotone" dataKey="withAlert" stroke="var(--color-withAlert)" strokeWidth={3} name={chartConfig.withAlert.label} />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Average time before driver regains full alertness.
              </p>
            </Card>
          </motion.div>

          {/* Detection Effectiveness Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 bg-card border-border h-full">
              <h3 className="text-2xl font-bold mb-6">Detection Effectiveness</h3>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={detectionData} margin={{ left: -20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="group" tickLine={false} axisLine={false} stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" label={{ value: "Episodes", angle: -90, position: "insideLeft", offset: -10 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="episodes" fill="var(--color-episodes)" name={chartConfig.episodes.label} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="detected" fill="var(--color-detected)" name={chartConfig.detected.label} radius={[4, 4, 0, 0]} />
                    <Bar dataKey="prevented" fill="var(--color-prevented)" name={chartConfig.prevented.label} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Average drowsy episodes per 100 hours of driving.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Dashboard Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-card border-border">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-secondary flex items-center justify-center">
              <Image
                  src="/nodyne-dashboard.png"
                  alt="Nodyne device mounted near driver's ear"
                  fill
                  className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">Live Dashboard Monitoring</h3>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
              Track your alertness levels in real-time with our web dashboard. View historical data, analyze patterns, and optimize your driving schedule.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
