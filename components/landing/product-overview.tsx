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

          {/* Улучшенная секция с картинкой и текстом */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative flex justify-center" // Центрируем на мобилках
            >
              {/* 1. Сменили aspect-square на aspect-[4/5] для портретного фото
        2. Убрали p-8, чтобы картинка была во весь блок
        3. Оставили max-w, чтобы на десктопе она не была гигантской
    */}
              <div className="relative aspect-[4/5] w-full max-w-[400px] rounded-2xl overflow-hidden border border-border shadow-2xl">
                <Image
                    src="/product-nodyne.png"
                    alt="Nodyne device"
                    fill
                    className="object-cover" // Заполняем всё пространство
                    priority
                />
                {/* Мягкое затемнение внизу, чтобы картинка лучше сливалась с интерфейсом */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Декоративное свечение сзади — делаем его чуть слабее */}
              <div className="absolute -z-10 inset-0 bg-primary/5 blur-[100px] rounded-full" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              {/* Текст оставляем как был, он выглядит хорошо */}
              <h3 className="text-3xl font-bold mb-6 tracking-tight">What Nodyne Measures</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Nodyne continuously monitors your head position using advanced motion sensors,
                  detecting subtle changes in pitch and roll that indicate drowsiness.
                </p>
                <div className="h-px bg-border w-1/4" />
                <p>
                  The device identifies dangerous patterns including <strong>micro-nods</strong>,
                  slow head drifts, and abnormal tilting.
                </p>
                <p className="bg-primary/10 border-l-4 border-primary p-4 text-foreground italic rounded-r-lg">
                  "Essential for professional and long-distance drivers who need to stay alert on the road."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Сетка характеристик */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
                <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                    <feature.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </Card>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
