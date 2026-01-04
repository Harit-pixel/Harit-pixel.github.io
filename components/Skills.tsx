import React from 'react';
import { SKILLS } from '../constants';
import SectionWrapper from './SectionWrapper';

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Arsenal</h2>
        <div className="h-1 w-20 bg-brand-accent rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SKILLS.map((skill, index) => (
          <div 
            key={index}
            className="group relative bg-brand-surface border border-white/5 p-6 rounded-xl hover:border-brand-accent/50 transition-colors duration-300"
          >
            <div className="flex flex-col items-start gap-4">
              <div className="p-3 bg-white/5 rounded-lg group-hover:bg-brand-accent/10 transition-colors">
                <skill.icon className="w-6 h-6 text-brand-muted group-hover:text-brand-accent transition-colors" />
              </div>
              <span className="text-gray-200 font-medium tracking-wide group-hover:text-white">
                {skill.name}
              </span>
            </div>
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;