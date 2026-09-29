import { useEffect } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { useLanguage } from './i18n/context';

export default function App() {
  const { ui } = useLanguage();

  // Feeds pointer coordinates to every `.spotlight` card with a single listener.
  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest?.<HTMLElement>('.spotlight');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', onPointerMove);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        {ui.nav.skip}
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
