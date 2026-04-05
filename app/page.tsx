import HeaderShell from './_components/header/HeaderShell';
import HeroShell from './_components/hero/HeroShell';
import AboutShell from './_components/about/AboutShell';
import ServicesShell from './_components/services/ServicesShell';
import CtaShell from './_components/cta/CtaShell';
import ProjectsShell from './_components/projects/ProjectsShell';
import ContactShell from './_components/contact/ContactShell';
import FooterShell from './_components/footer/FooterShell';
import ScrollToTopShell from './_components/scroll-to-top/ScrollToTopShell';

export default function Home() {
  return (
    <main>
      <HeaderShell />
      <HeroShell />
      <AboutShell />
      <ServicesShell />
      <CtaShell />
      <ProjectsShell />
      <ContactShell />
      <FooterShell />
      <ScrollToTopShell />
    </main>
  );
}
