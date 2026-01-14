"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const backgroundImages = [
  { x: "10%", y: "20%", rotate: -15, scale: 0.5 },
  { x: "80%", y: "10%", rotate: 10, scale: 0.8 },
  { x: "5%", y: "70%", rotate: 20, scale: 0.6 },
  { x: "90%", y: "60%", rotate: -5, scale: 0.9 },
  { x: "40%", y: "5%", rotate: 5, scale: 0.4 },
  { x: "60%", y: "80%", rotate: -25, scale: 0.7 },
];

export function HeroSection() {
  const scrollToLearnMore = () => {
    const element = document.getElementById("product-overview")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-secondary/30">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Floating Product Images */}
      {backgroundImages.map((img, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: img.y, left: img.x }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ opacity: 0.6, scale: img.scale, rotate: img.rotate }}
          transition={{ duration: 1, delay: index * 0.2 }}
        >
          <motion.div
            animate={{
              y: [0, Math.random() * 40 - 20, 0],
              x: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            <Image
              src="/nodyne-product-background.png"
              alt="Nodyne device floating in background"
              width={250}
              height={250}
              className="blur-sm pointer-events-none"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Animated glow effect */}
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-7xl md:text-9xl font-bold mb-4 text-balance">Nodyne</h1>
          <p className="text-2xl md:text-4xl mb-6 text-primary font-medium">Stay awake. Stay alive.</p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
            A wearable safety assistant that detects drowsiness before it&apos;s too late.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-lg px-8 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={scrollToLearnMore}
            >
              Learn More
            </Button>
            <Link href="/dashboard">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                Go to Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
