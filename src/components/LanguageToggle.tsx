import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-600/20">
        <div className="flex items-center p-2">
          <Globe className="w-5 h-5 text-gray-300 mr-2" />
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'en'
                ? 'bg-gray-600 text-white shadow-md'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLanguage('ar')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
              language === 'ar'
                ? 'bg-gray-600 text-white shadow-md'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            AR
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageToggle;