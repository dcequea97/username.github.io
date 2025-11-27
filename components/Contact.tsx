import React from 'react';
import { EMAIL, UI_LABELS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const labels = UI_LABELS[language];

  return (
    <section id="contact" className="py-32 bg-[#0B1120] text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <p className="text-emerald-400 font-mono mb-4">{labels.whatsNext}</p>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6">{labels.letsWork}</h2>
        
        <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
          {labels.available}
        </p>

        <a 
          href={`mailto:${EMAIL}`}
          className="inline-block bg-emerald-500 text-[#0B1120] px-10 py-4 rounded font-bold text-lg hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/20"
        >
          {labels.sayHello}
        </a>

        <div className="mt-20 text-slate-500 text-sm">
          <p>{labels.footer}</p>
          <p className="mt-2">{labels.edit}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
