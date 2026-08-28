# Elevate Fitness Studio

Create a modern, premium, and fully responsive 3D Gym & Fitness website using React (Vite) and Tailwind CSS.

The website must look like a high-end commercial fitness brand, similar to top gym websites such as Equinox, Gold’s Gym, or premium fitness studios. Use smooth 3D-style visuals, glassmorphism, gradients, subtle shadows, depth, and motion effects.

Tech stack:
- React (Vite)
- Tailwind CSS
- Framer Motion for animations
- React Icons
- Three.js + @react-three/fiber + @react-three/drei for 3D elements
- Swiper.js for sliders if needed

Design requirements:
- Dark theme with premium colors: black, charcoal, deep gray, white, and neon accent (electric blue or red).
- Professional typography and spacing.
- Fully mobile-friendly, tablet-friendly, and desktop-friendly.
- Responsive navigation and layouts.
- Accessibility-friendly (good contrast, readable text, keyboard-friendly).

Pages / Sections:

1. Hero Section
- Full-screen 3D hero.
- Animated 3D dumbbell, kettlebell, or abstract fitness object using Three.js.
- Headline: “Transform Your Body, Elevate Your Life”.
- Subheadline and CTA buttons:
  - Join Now
  - Book Free Trial
- Background with particles or gradient glow.
- Smooth entrance animations.

2. Navbar
- Transparent on top, solid on scroll.
- Logo + links: Home, Programs, Trainers, Pricing, Testimonials, Contact.
- Mobile hamburger menu with animated slide-in drawer.

3. Stats Section
- Animated counters:
  - 10,000+ Members
  - 50+ Trainers
  - 24/7 Access
  - 15 Years Experience

4. Programs Section
- 3D hover cards with tilt effect.
- Programs:
  - Strength Training
  - Fat Loss
  - CrossFit
  - Yoga & Mobility
  - Personal Training
  - Nutrition Coaching
- Cards should lift on hover with shadow and glow.

5. Trainers Section
- Professional trainer cards with image, specialty, experience, and social icons.
- Hover reveal effect.

6. Pricing Section
- Three plans:
  - Basic
  - Pro (highlighted)
  - Elite
- Feature comparison.
- Animated hover and active states.

7. Transformation / Gallery Section
- Before/after slider or masonry gallery.
- Smooth animations and lazy loading.

8. Testimonials
- Auto-playing testimonial carousel.
- Glassmorphism cards with member photos and ratings.

9. 3D CTA Banner
- Large animated section with floating 3D elements.
- Text: “Start Your Fitness Journey Today”.
- CTA button with pulse animation.

10. Contact Section
- Contact form with validation.
- Gym address, phone, email, and map placeholder.
- Social media links.

11. Footer
- Multi-column professional footer.
- Quick links, programs, hours, newsletter, social icons.

Animation requirements:
- Use Framer Motion throughout.
- Fade, slide, scale, and stagger animations.
- Smooth scrolling navigation.
- Hover micro-interactions.
- Page should feel alive but not excessive.

3D requirements:
- Use @react-three/fiber for at least the hero section.
- Add floating 3D gym object with subtle rotation.
- Maintain high performance on mobile devices.
- Reduce effects on small screens automatically.

Responsive requirements:
- Mobile-first approach.
- No horizontal overflow.
- Optimized spacing for 320px to 1920px screens.
- Sticky bottom CTA button on mobile.

Code quality:
- Use reusable React components.
- Create components folder structure.
- Use clean Tailwind utility patterns.
- Add comments for important sections.
- Keep code production-ready.

Performance:
- Lazy load heavy components.
- Optimize images.
- Use React.memo where useful.
- Avoid unnecessary re-renders.

Deliverables:
- Complete React component code.
- Tailwind classes included.
- Framer Motion animations included.
- Three.js hero component included.
- Responsive navbar included.
- No placeholder lorem ipsum; use realistic fitness content.
- The final result should look like a real premium gym website ready for deployment.

Also provide:
- Recommended folder structure
- Required npm install commands
- Tailwind configuration if needed
- A final polished version of App.jsx that assembles all sections in order.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a08457f6-3206-4393-868a-2a79f12a8ac8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
