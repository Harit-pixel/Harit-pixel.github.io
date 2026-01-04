import React from 'react';
import { OWNER_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-8 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-lg">{OWNER_NAME}</p>
          <p className="text-xs text-brand-muted">Expert Python Developer</p>
        </div>
        
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;