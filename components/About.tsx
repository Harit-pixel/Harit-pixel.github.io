import React from 'react';
import SectionWrapper from './SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" className="text-center">
      <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
      <div className="bg-brand-surface p-8 md:p-10 rounded-2xl border border-white/5 max-w-3xl mx-auto shadow-2xl backdrop-blur-sm">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
          At <span className="text-brand-accent font-semibold">15 years old</span>, I don't just write code; I architect solutions. 
          While others learn syntax, I build backend infrastructure, secure licensing systems, and hardware integrations using Python and C. 
          I am driven by efficiency, scalability, and the challenge of turning complex logic into seamless software.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;
