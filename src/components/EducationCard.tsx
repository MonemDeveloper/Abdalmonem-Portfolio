import React from 'react';
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from 'lucide-react';
import { Education } from '../data/cvData';

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
  const isDegree = education.degree.toLowerCase().includes('bachelor') || education.degree.toLowerCase().includes('degree');
  
  return (
    <div className="relative">
      {/* Timeline Line - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute -top-8 left-8 w-0.5 h-16 bg-gradient-to-b from-green-500 to-emerald-500"></div>
      
      {/* Timeline Dot - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full border-4 border-slate-900 shadow-lg z-10"></div>
      
      {/* Education Card */}
      <div className="lg:ml-16 group relative bg-slate-800/30 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-slate-700/30 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-4 lg:gap-6 mb-6">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 p-3 lg:p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              {isDegree ? <GraduationCap className="w-6 h-6 lg:w-8 lg:h-8 text-white" /> : <BookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-white" />}
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-green-200 group-hover:bg-clip-text transition-all duration-300">
                {education.degree}
              </h3>
              <h4 className="text-lg lg:text-xl font-semibold text-slate-300 mb-4">{education.institution}</h4>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-400 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="bg-slate-700/50 px-2 py-1 rounded-full text-xs">
                    {education.startDate} - {education.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs">{education.location}</span>
                </div>
                {education.gpa && (
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                      GPA: {education.gpa}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Description */}
          {education.description && (
            <div className="p-3 lg:p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300">
              <p className="text-slate-300 leading-relaxed text-sm lg:text-base">{education.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationCard;