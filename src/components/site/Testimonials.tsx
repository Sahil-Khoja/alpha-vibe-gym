import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";
import { SectionHeader } from "./Section";

const items = [
  {
    name: "Sarah Mitchell",
    role: "Member · 2 yrs",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    quote:
      "Down 34 lbs and stronger than I've ever been. The coaches actually care — I feel like part of a team, not just another membership number.",
  },
  {
    name: "James Whitaker",
    role: "Member · 4 yrs",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    quote:
      "Best facility I've trained at in 15 years of lifting. Equipment is top-tier, the community is elite, and the programming is next level.",
  },
  {
    name: "Priya Ramaswamy",
    role: "Member · 1 yr",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=400&auto=format&fit=crop",
    quote:
      "Went from never squatting to a 200 lb PR in nine months. The trainers meet you where you are and push you exactly the right amount.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Members who <span className="text-gradient">showed up</span></>}
        />
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            loop
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
            className="!pb-14"
          >
            {items.map((t) => (
              <SwiperSlide key={t.name}>
                <div className="glass rounded-3xl p-8 h-full flex flex-col">
                  <FaQuoteLeft className="text-primary text-2xl" />
                  <p className="mt-4 text-base md:text-lg leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-4 pt-6 border-t border-white/10">
                    <img src={t.img} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold truncate">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                    <div className="flex gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, i) => <FaStar key={i} className="text-sm" />)}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style>{`
        .swiper-pagination-bullet { background: rgba(255,255,255,0.3); opacity: 1; }
        .swiper-pagination-bullet-active { background: var(--neon); width: 24px; border-radius: 4px; transition: width .3s; }
      `}</style>
    </section>
  );
}
