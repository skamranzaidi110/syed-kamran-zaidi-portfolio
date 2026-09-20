import Hero from "@/components/Hero";
import ProjectsGallery from "@/components/ProjectsGallery";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProjectsGallery />
      <About />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
