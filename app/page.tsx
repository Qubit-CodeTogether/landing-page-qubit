import AboutUsSection from "@/containers/about-us-section";
import HeroSection from "@/containers/hero-section";
import JoinUsSection from "@/containers/joinus-section";
import ProjectSection from "@/containers/project-section";
import TestimonialSection from "@/containers/testimonial-section";

export default function Home() {
  const items = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <AboutUsSection />

      <ProjectSection />

      <TestimonialSection />

      <JoinUsSection />
    </main>
  );
}
