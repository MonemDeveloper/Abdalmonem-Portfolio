import React from 'react';
import Hero from './components/Hero';
import Section from './components/Section';
import Services from './components/Services';
import ExperienceCard from './components/ExperienceCard';
import SkillsGrid from './components/SkillsGrid';
import EducationCard from './components/EducationCard';
import Certificates from './components/Certificates';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { experiences, education } from './data/cvData';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Experience Section */}
      <Section 
        id="experience" 
        title="Professional Experience" 
        subtitle="A comprehensive journey through cutting-edge technology and innovative solutions"
        background="dark"
      >
        <div className="space-y-6 lg:space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section 
        id="skills" 
        title="Technical Mastery & Expertise" 
        subtitle="Advanced proficiency across modern development technologies and methodologies"
        background="darker"
      >
        <SkillsGrid />
      </Section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Education Section */}
      <Section 
        id="education" 
        title="Education & Qualifications" 
        subtitle="Academic excellence and continuous learning in technology and innovation"
        background="dark"
      >
        <div className="space-y-4 lg:space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} education={edu} index={index} />
          ))}
        </div>
      </Section>

      {/* Certificates Section */}
      <Section 
        id="certificates" 
        title="Certificates & Accreditations" 
        subtitle="Professional and specialized certificates I have obtained"
        background="darker"
      >
        <Certificates />
      </Section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;