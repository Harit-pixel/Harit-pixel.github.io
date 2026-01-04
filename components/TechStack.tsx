import React from 'react';
import { TECH_STACK } from '../constants';
import SectionWrapper from './SectionWrapper';

const TechStack: React.FC = () => {
  return (
    <SectionWrapper className="py-10 border-y border-white/5 bg-white/[0.02]">
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
        {TECH_STACK.map((tech, index) => (
          <span 
            key={index} 
            className="text-xl md:text-2xl font-light text-gray-400 hover:text-brand-accent transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TechStack;