import React from 'react';
import { Award, ExternalLink, Calendar, Shield, Star, Trophy } from 'lucide-react';
import { certificates } from '../data/cvData';

const Certificates: React.FC = () => {
  const getCertificateIcon = (index: number) => {
    const icons = [Award, Shield, Star, Trophy, Award];
    return icons[index % icons.length];
  };

  const getCertificateGradient = (index: number) => {
    const gradients = [
      'from-yellow-500 to-orange-500',
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500',
      'from-red-500 to-rose-500'
    ];
    return gradients[index % gradients.length];
  };

  // Create a combined array with certificates and continuous learning
  const allItems = [
    ...certificates,
    {
      id: 'continuous-learning',
      name: 'Continuous Learning',
      issuer: 'Professional Development',
      date: 'Ongoing',
      link: undefined,
      isContinuousLearning: true
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <h3 className="text-3xl font-bold text-white">Professional Certifications</h3>
          <Trophy className="w-8 h-8 text-yellow-500" />
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Industry-recognized certifications that validate my expertise and commitment to continuous learning
        </p>
      </div>

      {/* Certificates Grid - 2 columns, 3 rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {allItems.map((item, index) => {
          const isContinuousLearning = 'isContinuousLearning' in item;
          
          if (isContinuousLearning) {
            return (
              <div 
                key={item.id}
                className="group relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-green-200 group-hover:bg-clip-text transition-all duration-300">
                        {item.name}
                      </h4>
                      <p className="text-slate-300 font-semibold mb-3">{item.issuer}</p>
                      
                      {/* Date */}
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="bg-slate-700/50 px-2 py-1 rounded-full">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description for Continuous Learning */}
                  <div className="mt-4 p-3 bg-slate-700/30 rounded-lg">
                    <p className="text-slate-300 text-sm leading-relaxed">
                      I'm committed to staying current with the latest technologies and industry best practices through continuous learning and professional development.
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          // Regular certificate item
          const IconComponent = getCertificateIcon(index);
          const gradient = getCertificateGradient(index);
          
          return (
            <div 
              key={item.id}
              className="group relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`bg-gradient-to-br ${gradient} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      {item.name}
                    </h4>
                    <p className="text-slate-300 font-semibold mb-3">{item.issuer}</p>
                    
                    {/* Date and Link */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span className="bg-slate-700/50 px-2 py-1 rounded-full">
                          {item.date}
                        </span>
                      </div>
                      
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-lg group/link"
                        >
                          <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform duration-300" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;