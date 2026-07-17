import HeroSection from "./components/HeroSection";
import ProfileSection from "./components/ProfileSection";
import FocusSection from "./components/FocusSection";
import BuildSection from "./components/BuildSection";
import RhythmSection from "./components/RhythmSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main style={{ background: "var(--color-paper)", color: "var(--color-ink)" }}>
      <HeroSection />
      <ProfileSection />
      <FocusSection />
      <BuildSection />
      <RhythmSection />
      <ContactSection />
    </main>
  );
}
