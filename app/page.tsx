import HeroShell from './_components/hero/HeroShell';
import AboutShell from './_components/about/AboutShell';
import ServicesShell from './_components/services/ServicesShell';
import CtaShell from './_components/cta/CtaShell';
import ProjectsShell from './_components/projects/ProjectsShell';
import ContactShell from './_components/contact/ContactShell';

export default function Home() {
  return (
    <main>
      <HeroShell />
      <AboutShell />
      <ServicesShell />
      <CtaShell />
      <ProjectsShell />
      <ContactShell />
    </main>
  );
}
