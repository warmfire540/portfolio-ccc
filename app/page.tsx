import HeroShell from './_components/hero/HeroShell';
import AboutShell from './_components/about/AboutShell';
import ServicesShell from './_components/services/ServicesShell';

export default function Home() {
  return (
    <main>
      <HeroShell />
      <AboutShell />
      <ServicesShell />
    </main>
  );
}
