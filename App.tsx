import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { UI_LABELS } from './constants';

const Content: React.FC = () => {
  const { language } = useLanguage();
  const labels = UI_LABELS[language];

  return (
    <div className="bg-[#0B1120] min-h-screen text-slate-300 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Floating AI Assistant removed */}
      
      {/* Footer */}
      <footer className="bg-[#020c1b] py-6 text-center text-slate-500 text-xs font-mono">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} David Cequea. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Content />
    </LanguageProvider>
  );
};

export default App;
