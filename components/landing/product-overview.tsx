"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Brain, Bell, Zap, Battery } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Brain,
    title: "5 Detection Modes",
    description: "Strong Nod, Micronods, Drift, Freeze, Side Tilt",
  },
  {
    icon: Zap,
    title: "Real-time Tracking",
    description: "Continuous head position monitoring",
  },
  {
    icon: Bell,
    title: "Loud Audible Alert",
    description: "Immediate sound and light warnings",
  },
  {
    icon: Battery,
    title: "Compact & Rechargeable",
    description: "Long-lasting battery for extended trips",
  },
]

export function ProductOverview() {
  return (
    <section id="product-overview" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Advanced Drowsiness Detection
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-card border border-border">
              <Image
                src="/product-nodyne.png"
                alt="Nodyne device mounted near driver's ear"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">What Nodyne Measures</h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Nodyne continuously monitors your head position using advanced motion sensors, detecting subtle changes
                in pitch and roll that indicate drowsiness.
              </p>
              <p>
                The device identifies dangerous patterns including micro-nods, slow head drifts, and abnormal tilting
                that occur when drivers begin to fall asleep.
              </p>
              <p>
                When dangerous movement is detected, Nodyne immediately triggers both audible and visual alerts to wake
                the driver before an accident occurs.
              </p>
              <p className="text-primary font-semibold">
                Essential for professional and long-distance drivers who need to stay alert on the road.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-card border-border hover:border-primary/50 transition-colors">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
