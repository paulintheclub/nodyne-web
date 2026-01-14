"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Pavel K.",
    role: "Long-Distance Truck Driver",
    content:
      "I drive 8 hours daily — Nodyne literally keeps me awake. The alerts are immediate and effective. This device has become an essential part of my safety equipment.",
    rating: 5,
  },
  {
    name: "Tomas H.",
    role: "Fleet Owner",
    content:
      "As a fleet owner, I'm impressed by how consistent and accurate the alerts are. We've equipped all our vehicles with Nodyne and seen a significant reduction in incidents.",
    rating: 5,
  },
  {
    name: "Maria S.",
    role: "Rideshare Driver",
    content:
      "Working night shifts can be exhausting. Nodyne gives me peace of mind knowing I'll be alerted if I start to drift off. My passengers' safety is my priority.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-balance">Trusted by Drivers</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-balance">
            See what professional drivers are saying about Nodyne
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-card border-border h-full hover:border-primary/50 transition-colors">
                <Quote className="w-10 h-10 text-primary mb-4" />
                <p className="text-muted-foreground leading-relaxed mb-6">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
