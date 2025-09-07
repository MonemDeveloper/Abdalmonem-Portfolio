import React from 'react';
import { Calendar, MapPin, Building, ArrowRight, CheckCircle } from 'lucide-react';
import { Experience } from '../data/cvData';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <div className="relative">
      {/* Timeline Line - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute -top-8 left-8 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-purple-500"></div>
      
      {/* Timeline Dot - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 shadow-lg z-10"></div>
      
      {/* Experience Card */}
      <div className="lg:ml-16 group relative bg-slate-800/30 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Building className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                  {experience.title}
                </h3>
              </div>
              <h4 className="text-lg lg:text-xl font-semibold text-slate-300 mb-3">{experience.company}</h4>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="bg-slate-700/50 px-2 py-1 rounded-full text-xs">
                    {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs">{experience.location}</span>
                </div>
              </div>
            </div>
            
            {experience.current && (
              <div className="mt-4 lg:mt-0">
                <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                  <CheckCircle className="w-3 h-3" />
                  Current Position
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <div className="grid gap-2 lg:gap-3">
              {experience.description.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 lg:gap-3 p-2 lg:p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
                  <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 leading-relaxed text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h5 className="text-xs lg:text-sm font-semibold text-slate-400 mb-2 lg:mb-3 uppercase tracking-wide">Technologies Used</h5>
            <div className="flex flex-wrap gap-1.5 lg:gap-2">
              {experience.technologies.map((tech, idx) => (
                <span 
                  key={idx}
                  className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-slate-300 px-2 lg:px-3 py-1 lg:py-1.5 rounded-lg text-xs lg:text-sm font-medium border border-slate-600/50 hover:border-blue-500/50 hover:text-blue-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;