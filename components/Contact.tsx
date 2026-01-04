import React from 'react';
import { SOCIALS } from '../constants';
import SectionWrapper from './SectionWrapper';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="text-center py-32">
      <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something.</h2>
      <p className="text-brand-muted mb-10 max-w-xl mx-auto">
        Ready to collaborate on high-performance systems? 
        Reach out via email or social platforms.
      </p>

      <div className="flex justify-center gap-6">
        {SOCIALS.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="p-4 bg-brand-surface border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
            aria-label={social.name}
          >
            <social.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Contact;