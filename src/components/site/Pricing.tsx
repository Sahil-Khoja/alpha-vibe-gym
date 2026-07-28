import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { SectionHeader } from "./Section";

const plans = [
  {
    name: "Basic",
    price: 29,
    tag: "Get started",
    features: ["Full gym access (6am–10pm)", "2 group classes / week", "Locker room & showers", "Fitness assessment"],
  },
  {
    name: "Pro",
    price: 59,
    tag: "Most popular",
    highlight: true,
    features: ["24/7 club access", "Unlimited group classes", "1 PT session / month", "Nutrition guide", "Guest passes (2/mo)"],
  },
  {
    name: "Elite",
    price: 119,
    tag: "All-access",
    features: ["Everything in Pro", "4 PT sessions / month", "Custom meal plan", "Recovery lounge & sauna", "Priority booking"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Membership"
          title={<>Simple pricing. <span className="text-gradient">Serious results.</span></>}
          subtitle="No contracts. Cancel anytime. Every plan starts with a free consultation."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-gradient-to-br from-primary/25 via-card to-card border border-primary/40 shadow-[0_20px_80px_-20px_var(--neon)] md:scale-[1.03]"
                  : "glass"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
                  {p.tag}
                </span>
              )}
              <div className="text-sm text-muted-foreground">{p.name}</div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-5xl font-black font-display">${p.price}</span>
                <span className="text-muted-foreground pb-1">/mo</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <FiCheck className="text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 w-full ${p.highlight ? "btn-neon btn-neon-hover" : "btn-ghost hover:bg-white/10"}`}
              >
                Choose {p.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
