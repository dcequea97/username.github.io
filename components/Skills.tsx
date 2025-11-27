import React from 'react';
import { SKILLS, UI_LABELS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Skills: React.FC = () => {
  const { language } = useLanguage();
  const skills = SKILLS[language];
  const labels = UI_LABELS[language];

  return (
    <section id="skills" className="py-24 bg-[#0B1120]">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
            {labels.techSkills} <span className="text-emerald-400">{labels.techSkillsSuffix}</span>
          </h2>
          <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
        </div>

        <div className="text-slate-400 mb-12 max-w-2xl">
          <p>
            {labels.techStack}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div 
              key={category.title}
              className="bg-[#112240] p-8 rounded-lg hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-emerald-500/30"
            >
              <div className="flex items-center mb-6 text-emerald-400 text-2xl">
                <i className={`fa-solid ${category.icon} mr-3`}></i>
                <h3 className="font-semibold text-slate-100 text-xl">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-[#1e293b] text-slate-300 text-sm rounded font-mono border border-slate-700 hover:text-emerald-300 hover:border-emerald-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
