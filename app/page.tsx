import AboutUsSection from "@/containers/about-us-section";
import HeroSection from "@/containers/hero-section";
import JoinUsSection from "@/containers/joinus-section";
import ProjectSection from "@/containers/project-section";
import TestimonialSection from "@/containers/testimonial-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <HeroSection />

      <AboutUsSection />

      <ProjectSection />

      <TestimonialSection />

      <JoinUsSection />
    </main>
  );
}
