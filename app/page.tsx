import HeroShell from './_components/hero/HeroShell';
import AboutShell from './_components/about/AboutShell';
import ServicesShell from './_components/services/ServicesShell';
import CtaShell from './_components/cta/CtaShell';

export default function Home() {
  return (
    <main>
      <HeroShell />
      <AboutShell />
      <ServicesShell />
      <CtaShell />
    </main>
  );
}
