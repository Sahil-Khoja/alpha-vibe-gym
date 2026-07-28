import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { SectionHeader } from "./Section";

const trainers = [
  { name: "Marcus Reed", role: "Head Coach · Strength", years: 12, img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop" },
  { name: "Ava Chen", role: "HIIT & Conditioning", years: 8, img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop" },
  { name: "Diego Santos", role: "CrossFit Level 3", years: 10, img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop" },
  { name: "Nadia Patel", role: "Yoga & Mobility", years: 9, img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop" },
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Trainers"
          title={<>Coached by the <span className="text-gradient">best in the game</span></>}
          subtitle="Certified professionals with a track record of transforming clients — from beginners to competitors."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainers.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-card"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={`${t.name}, ${t.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
                <h3 className="text-lg font-bold">{t.name}</h3>
                <div className="text-xs text-primary mt-1">{t.role} · {t.years} yrs</div>
                <div className="mt-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                  {[FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, k) => (
                    <a key={k} href="#" aria-label="social" className="grid h-8 w-8 place-items-center rounded-full glass hover:bg-primary/30">
                      <Icon className="text-sm" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
