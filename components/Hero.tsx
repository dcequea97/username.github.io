import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS, UI_LABELS, EMAIL } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const info = PERSONAL_INFO[language];
  const labels = UI_LABELS[language];

  return (
    <section id="about" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="text-emerald-400 font-mono mb-4 tracking-wide">{labels.hello}</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4 tracking-tight">
            {info.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
            {info.role}
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed mb-8">
            {info.bio}
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects" className="bg-emerald-500 text-[#0B1120] px-8 py-3 rounded font-semibold hover:bg-emerald-400 transition-colors">
              {labels.viewWork}
            </a>
            <a href="#contact" className="border border-slate-600 text-slate-300 px-8 py-3 rounded font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-colors">
              {labels.contactMe}
            </a>
          </div>

          <div className="flex items-center space-x-6">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.platform} 
                href={link.url} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-emerald-400 text-xl transition-colors"
                aria-label={link.platform}
              >
                <i className={`fa-brands ${link.icon}`}></i>
              </a>
            ))}
            <a 
                href={`mailto:${EMAIL}`}
                className="text-slate-400 hover:text-emerald-400 text-xl transition-colors"
                aria-label="Email"
              >
                 <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
          <div className="relative w-64 h-64 md:w-96 md:h-96 group">
            <div className="absolute inset-0 border-2 border-emerald-400 rounded-full translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#112240] grayscale hover:grayscale-0 transition-all duration-500 bg-slate-800">
               <img 
                 src="https://picsum.photos/id/447/800/800" 
                 alt="Profile" 
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;