"use client"

import { motion } from "framer-motion"
import { Settings, Activity, AlertTriangle, Volume2 } from "lucide-react"

const steps = [
  {
    icon: Settings,
    title: "Calibration",
    description: "Detects your normal head position and establishes baseline measurements",
  },
  {
    icon: Activity,
    title: "Monitoring",
    description: "Measures pitch and roll continuously throughout your drive",
  },
  {
    icon: AlertTriangle,
    title: "Detection",
    description: "Identifies abnormal motion patterns that indicate drowsiness",
  },
  {
    icon: Volume2,
    title: "Alert",
    description: "Triggers sound & light alarm if danger is detected",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-balance">How It Works</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-balance">
            Four simple steps to keep you safe on the road
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-6">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="relative z-10 bg-background px-4">
                  <div className="text-5xl font-bold text-primary/20 mb-2">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-lg bg-card border border-border">
            <p className="text-lg text-muted-foreground max-w-2xl">
              The entire process happens in real-time, with response times under 500ms to ensure you&apos;re alerted the
              moment drowsiness is detected.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
