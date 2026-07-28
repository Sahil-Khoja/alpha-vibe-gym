import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Stats from "@/components/site/Stats";
import Programs from "@/components/site/Programs";
import Trainers from "@/components/site/Trainers";
import Pricing from "@/components/site/Pricing";
import Gallery from "@/components/site/Gallery";
import Testimonials from "@/components/site/Testimonials";
import CTABanner from "@/components/site/CTABanner";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import MobileCTA from "@/components/site/MobileCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IronPulse — Premium 24/7 Gym & Fitness Club" },
      {
        name: "description",
        content:
          "IronPulse is a premium fitness club with world-class trainers, 24/7 access, strength, CrossFit, yoga and nutrition programs. Start your free trial today.",
      },
      { property: "og:title", content: "IronPulse — Premium 24/7 Gym & Fitness Club" },
      {
        property: "og:description",
        content:
          "World-class trainers, cutting-edge equipment, and a community built to push you further. Book your free trial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground overflow-x-clip scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Trainers />
        <Pricing />
        <Gallery />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
