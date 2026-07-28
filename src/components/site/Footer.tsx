import { GiWeightLiftingUp } from "react-icons/gi";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa6";

const cols = [
  { title: "Club", links: ["About", "Careers", "Press", "Partnerships"] },
  { title: "Programs", links: ["Strength", "CrossFit", "Yoga", "Nutrition"] },
  { title: "Hours", links: ["Mon–Fri · 5am–11pm", "Sat–Sun · 7am–9pm", "24/7 for Pro+"] },
];

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-28 md:pb-12 border-t border-white/5 mt-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-neon-2">
                <GiWeightLiftingUp className="text-xl text-white" />
              </span>
              <span className="font-display text-lg font-bold">IRON<span className="text-primary">PULSE</span></span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              A premium fitness club engineered for people who take their health seriously.
            </p>
            <form className="mt-6 flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="Email for weekly training tips"
                className="flex-1 min-w-0 rounded-full bg-black/30 border border-white/10 px-4 py-2.5 text-sm focus:outline-none focus:border-primary/60"
              />
              <button type="button" className="btn-neon btn-neon-hover !py-2.5 !px-5 text-sm">Join</button>
            </form>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-bold mb-4">{c.title}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-foreground transition">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} IronPulse Club. All rights reserved.</p>
          <div className="flex gap-2">
            {[FaInstagram, FaFacebookF, FaYoutube, FaTiktok].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-primary/30">
                <Icon className="text-sm" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
