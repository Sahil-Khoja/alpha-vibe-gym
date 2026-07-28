import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

const Hero3D = lazy(() => import("./Hero3D"));

export default function Hero() {
  return (
    <section id="home" className="relative min-h-dvh overflow-hidden pt-24 md:pt-28">
      {/* 3D scene */}
      <div className="absolute inset-0 -z-0 opacity-90">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pb-24 md:pb-32 flex flex-col justify-center min-h-[calc(100dvh-6rem)]">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Premium Fitness Club — Est. 2010
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95]"
        >
          Transform Your Body,{" "}
          <span className="text-gradient">Elevate Your Life</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-base md:text-lg text-muted-foreground"
        >
          World-class trainers, cutting-edge equipment, and a community built to push you further. Train smarter. Live stronger.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#pricing" className="btn-neon btn-neon-hover">
            Join Now <FiArrowRight />
          </a>
          <a href="#contact" className="btn-ghost hover:bg-white/10">
            <FiPlay /> Book Free Trial
          </a>
        </motion.div>

        {/* trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-14 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl"
        >
          {[
            ["4.9★", "Google Reviews"],
            ["10k+", "Members"],
            ["50+", "Trainers"],
            ["24/7", "Access"],
          ].map(([a, b]) => (
            <div key={b} className="glass rounded-2xl px-4 py-3">
              <div className="text-xl md:text-2xl font-bold">{a}</div>
              <div className="text-xs text-muted-foreground">{b}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
