import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { GiWeightLiftingUp, GiRunningShoe, GiMuscleUp, GiMeditation, GiKettlebellSimple, GiKnifeFork } from "react-icons/gi";
import { SectionHeader } from "./Section";

const programs = [
  { icon: GiWeightLiftingUp, title: "Strength Training", desc: "Progressive overload programs to build raw power and lean muscle mass." },
  { icon: GiRunningShoe, title: "Fat Loss", desc: "HIIT + metabolic conditioning to torch fat and reshape your physique." },
  { icon: GiMuscleUp, title: "CrossFit", desc: "Functional, high-intensity workouts that build athletes, not just bodies." },
  { icon: GiMeditation, title: "Yoga & Mobility", desc: "Flexibility, breath, and recovery — the foundation of lifelong movement." },
  { icon: GiKettlebell, title: "Personal Training", desc: "1-on-1 coaching, custom periodization, weekly accountability." },
  { icon: GiKnifeFork, title: "Nutrition Coaching", desc: "Macro-based meal plans built for your goals, not generic templates." },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setStyle({
          transform: `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 10}deg) translateY(-4px)`,
        });
      }}
      onMouseLeave={() => setStyle({ transform: "perspective(900px) rotateX(0) rotateY(0)" })}
      style={{ transition: "transform 300ms ease", ...style }}
      className="h-full"
    >
      {children}
    </div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Programs"
          title={<>Training built for <span className="text-gradient">every goal</span></>}
          subtitle="From your first rep to your next PR — pick the program that matches your ambition."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <TiltCard>
                <div className="group relative h-full rounded-3xl glass p-7 overflow-hidden hover:border-primary/40 transition">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/30 to-neon-2/20 border border-white/10">
                    <p.icon className="text-3xl text-white" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-6 text-xs uppercase tracking-widest text-primary opacity-70 group-hover:opacity-100 transition">
                    Explore →
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
