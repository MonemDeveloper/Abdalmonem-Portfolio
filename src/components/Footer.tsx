import React from 'react';
import { Heart, Code, Coffee, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/cvData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900/80 backdrop-blur-sm border-t border-slate-700/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{personalInfo.name}</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Full-stack developer passionate about creating exceptional digital experiences and innovative technical solutions.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-yellow-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Information</h4>
            <div className="space-y-3 text-slate-400">
              <p>{personalInfo.location}</p>
              <p>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors duration-300">
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors duration-300">
                  {personalInfo.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-slate-400 text-center sm:text-left">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
          >
            <ArrowUp className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;