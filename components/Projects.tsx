import React from 'react';
import { PROJECTS } from '../constants';
import SectionWrapper from './SectionWrapper';
import { FolderGit2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
        <div className="h-1 w-20 bg-brand-accent rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            className="group flex flex-col bg-brand-surface border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-brand-accent/5"
          >
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <FolderGit2 className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-xs text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;