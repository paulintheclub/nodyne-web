"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

const preventionData = [
  { name: "Prevented", value: 87, color: "hsl(var(--chart-1))" },
  { name: "Not Prevented", value: 13, color: "hsl(var(--chart-2))" },
]

const stats = [
  { label: "Test Participants", value: "25+" },
  { label: "Hours Observed", value: "300+" },
  { label: "Incidents Prevented", value: "87%" },
  { label: "Average Response Time", value: "<100ms" },
]

const chartConfig = {
  prevented: {
    label: "Prevented",
    color: "hsl(var(--primary))",
  },
  notPrevented: {
    label: "Not Prevented",
    color: "hsl(var(--muted))",
  },
}

export function TestResults() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-balance">Validated by Real Testing</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-balance">
            Based on real driving simulations with 25 participants over 300 hours of observation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-card border-border">
              <h3 className="text-2xl font-bold mb-6 text-center">Incident Prevention Rate</h3>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={preventionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {preventionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <ChartTooltip content={<ChartTooltipContent />} />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
              <p className="text-center text-muted-foreground mt-4">
                Nodyne successfully prevented 87% of risky sleep events during testing
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-border text-center hover:border-primary/50 transition-colors">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-bold mb-6">Test Methodology</h3>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our comprehensive testing program involved 25 professional drivers in controlled driving simulation
                environments. Each participant completed multiple 4-hour sessions designed to induce natural drowsiness
                patterns.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Results showed that Nodyne reduced risky sleep events by 87%, with an average detection time of under
                500 milliseconds. The device demonstrated consistent performance across all participants, regardless of
                age, gender, or driving experience.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
