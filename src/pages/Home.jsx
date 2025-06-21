import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Footer } from "../components/Footer";
import { LandingPagesSection } from "../components/LandingPages";
import { ExperienceSection } from "../components/ExperienceSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <ExperienceSection/>
        <ProjectsSection />
        <LandingPagesSection/>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
