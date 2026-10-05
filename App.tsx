
import React, { useState, useEffect } from 'react';
import { DATA } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import EducationItem from './components/EducationItem';
import SkillBar from './components/SkillBar';
import ToolBadge from './components/ToolBadge';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      {/* Background Image Container */}
      {DATA.personal.backgroundImage && (
        <div 
          className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${DATA.personal.backgroundImage})` }}
        />
      )}
      
      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-slate-950/50 via-slate-950/90 to-slate-950 pointer-events-none" />

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />
        
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero data={DATA.personal} />

          <Section id="sobre-mi" title="Sobre Mí" icon="fa-user-astronaut">
            <div className="bg-slate-900/40 rounded-3xl p-8 shadow-sm border border-white/10 backdrop-blur-md">
              <p className="text-lg leading-relaxed text-slate-300 mb-6">
                {DATA.personal.summary}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DATA.certificates.map((cert, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-4 bg-cyan-950/30 rounded-xl border border-cyan-500/20">
                    <i className="fa-solid fa-certificate text-cyan-400"></i>
                    <span className="font-medium text-slate-200">{cert.name} ({cert.year})</span>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          <Section id="experiencia" title="Experiencia Laboral" icon="fa-briefcase">
            <div className="space-y-6">
              {DATA.experience.map((exp) => (
                <ExperienceItem key={exp.id} experience={exp} />
              ))}
            </div>
          </Section>

          <Section id="educacion" title="Educación" icon="fa-graduation-cap">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DATA.education.map((edu) => (
                <EducationItem key={edu.id} education={edu} />
              ))}
            </div>
          </Section>

          <Section id="habilidades" title="Habilidades y Herramientas" icon="fa-laptop-code">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-bold text-slate-200 mb-4">Competencias Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {DATA.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-4">Herramientas</h3>
                <div className="flex flex-wrap gap-2">
                  {DATA.tools.map((tool) => (
                    <ToolBadge key={tool.name} tool={tool} />
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Contact personal={DATA.personal} />
        </main>

        <footer className="bg-slate-950/80 backdrop-blur-md border-t border-white/5 py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-slate-500 font-medium">© {new Date().getFullYear()} Ana Isabel Mendoza Jurado. Diseñado con pasión.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
