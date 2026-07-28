import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { FiUsers, FiAward, FiClock, FiCalendar } from "react-icons/fi";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.8, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, mv, to]);
  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const items = [
  { icon: FiUsers, value: 10000, suffix: "+", label: "Active Members" },
  { icon: FiAward, value: 50, suffix: "+", label: "Certified Trainers" },
  { icon: FiClock, value: 24, suffix: "/7", label: "Club Access" },
  { icon: FiCalendar, value: 15, suffix: "", label: "Years of Experience" },
];

export default function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden group"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/40 transition" />
              <it.icon className="text-2xl text-primary mb-4" />
              <div className="text-3xl md:text-5xl font-black font-display">
                <Counter to={it.value} suffix={it.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{it.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
