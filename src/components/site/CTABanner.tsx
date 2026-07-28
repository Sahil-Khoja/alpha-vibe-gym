import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Suspense } from "react";

function FloatingObjects() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2.5, 0.5, 0]}>
          <torusGeometry args={[0.6, 0.22, 24, 64]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={1.4} floatIntensity={1.5}>
        <mesh position={[2.4, -0.4, 0]}>
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#ef4444" metalness={0.7} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2}>
        <mesh position={[1, 1.2, -1]}>
          <boxGeometry args={[0.7, 0.7, 0.7]} />
          <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.15} />
        </mesh>
      </Float>
    </>
  );
}

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-gradient-to-br from-primary/20 via-card to-background p-8 md:p-16">
          <div className="absolute inset-0 opacity-70">
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.6]}>
                <FloatingObjects />
              </Canvas>
            </Suspense>
          </div>
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black leading-tight"
            >
              Start Your <span className="text-gradient">Fitness Journey</span> Today
            </motion.h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              No excuses. No contracts. Just a team ready to help you become the strongest version of yourself.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#pricing" className="btn-neon btn-neon-hover animate-pulse-ring">
                Claim Free Week <FiArrowRight />
              </a>
              <a href="#contact" className="btn-ghost hover:bg-white/10">Talk to a Coach</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
