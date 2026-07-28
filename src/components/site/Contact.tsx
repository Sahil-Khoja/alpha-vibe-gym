import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa6";
import { SectionHeader } from "./Section";

export default function Contact() {
  const [status, setStatus] = useState<null | "ok" | "err">(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const msg = String(fd.get("message") || "").trim();
    const errs: Record<string, string> = {};
    if (name.length < 2) errs.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = "Enter a valid email";
    if (msg.length < 10) errs.message = "Tell us a bit more (10+ chars)";
    setErrors(errs);
    if (Object.keys(errs).length) return setStatus("err");
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeader
          eyebrow="Contact"
          title={<>Come <span className="text-gradient">train with us</span></>}
          subtitle="Drop by the club or send a message — we usually reply within an hour."
        />
        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass rounded-3xl p-6 md:p-10 space-y-4"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Full name" error={errors.name} />
              <Field name="email" type="email" label="Email" error={errors.email} />
            </div>
            <Field name="phone" label="Phone (optional)" />
            <div>
              <label className="text-sm text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={5}
                className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 focus:outline-none focus:border-primary/60 transition"
                placeholder="Which program are you interested in?"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-neon btn-neon-hover">
              Send message <FiSend />
            </button>
            {status === "ok" && (
              <p className="text-sm text-primary">Thanks! We'll be in touch shortly.</p>
            )}
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass rounded-3xl p-6 space-y-5">
              <InfoRow icon={FiMapPin} title="IronPulse HQ" text="221 Steel Avenue, Downtown, NY 10013" />
              <InfoRow icon={FiPhone} title="Call us" text="+1 (555) 010-4477" />
              <InfoRow icon={FiMail} title="Email" text="hello@ironpulse.club" />
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/3] bg-card">
              {/* Map placeholder */}
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,0.15),rgba(239,68,68,0.1))]" />
              <div className="absolute inset-0 opacity-40" style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.15) 0, transparent 40%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.3) 0, transparent 40%)",
              }} />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="grid h-14 w-14 mx-auto place-items-center rounded-full bg-primary shadow-lg animate-pulse-ring">
                  <FiMapPin className="text-2xl" />
                </div>
                <div className="mt-3 text-sm text-muted-foreground">221 Steel Avenue</div>
              </div>
            </div>
            <div className="flex gap-2">
              {[FaInstagram, FaFacebookF, FaYoutube, FaTiktok].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-primary/30 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 focus:outline-none focus:border-primary/60 transition"
      />
      {error && <p className="text-xs text-destructive mt-1">{error}</p>}
    </div>
  );
}

function InfoRow({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
        <Icon className="text-lg" />
      </div>
      <div className="min-w-0">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-muted-foreground truncate">{text}</div>
      </div>
    </div>
  );
}
