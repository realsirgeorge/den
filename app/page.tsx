import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SkillBadges from '@/components/SkillBadges';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import DevelopmentGrid from '@/components/DevelopmentGrid';
import Education from '@/components/Education';
import CertsWall from '@/components/CertsWall';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <SkillBadges />
      <ExperienceTimeline />
      <DevelopmentGrid />
      <Education />
      <CertsWall />
      <ContactForm />
      <Footer />
    </main>
  );
}