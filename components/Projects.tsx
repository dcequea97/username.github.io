import React from 'react';
import { PROJECTS, UI_LABELS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const projects = PROJECTS[language];
  const labels = UI_LABELS[language];

  return (
    <section id="projects" className="py-24 bg-[#0B1120]">
      <div className="container mx-auto px-6">
         <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            {labels.featuredProjects} <span className="text-emerald-400">{labels.featuredProjectsSuffix}</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl">
            {labels.projectsDesc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#112240] rounded-xl overflow-hidden hover:shadow-2xl transition-all hover:shadow-emerald-900/20 group h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-sm mt-auto">
                   {project.links.playStore && (
                     <a href={project.links.playStore} className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors">
                       <i className="fa-brands fa-google-play mr-2"></i> Play Store
                     </a>
                   )}
                   {project.links.github && (
                     <a href={project.links.github} className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors">
                       <i className="fa-brands fa-github mr-2"></i> GitHub
                     </a>
                   )}
                   {project.links.source && (
                     <a href={project.links.source} className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors">
                       <i className="fa-solid fa-code mr-2"></i> Source Code
                     </a>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
