import React from 'react';
import { skills } from '../data/cvData';

const SkillsGrid: React.FC = () => {
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const SkillCard: React.FC<{ skill: { name: string; level: number; category: string } }> = ({ skill }) => {
    const getCategoryColor = (category: string) => {
      switch (category) {
        case 'technical': return 'from-blue-500 to-cyan-500';
        case 'soft': return 'from-purple-500 to-pink-500';
        default: return 'from-slate-500 to-slate-600';
      }
    };

    const getCategoryIcon = (category: string) => {
      switch (category) {
        case 'technical': return '💻';
        case 'soft': return '🧠';
        default: return '⭐';
      }
    };

    return (
      <div className="group relative bg-slate-800/30 backdrop-blur-sm p-4 rounded-xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10">
        {/* Background Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500`}></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">{getCategoryIcon(skill.category)}</span>
              <h4 className="font-semibold text-white text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                {skill.name}
              </h4>
            </div>
            <span className="text-xs text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
              {skill.level}%
            </span>
          </div>
          
          <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
            <div 
              className={`bg-gradient-to-r ${getCategoryColor(skill.category)} h-2 rounded-full transition-all duration-1000 ease-out relative`}
              style={{ width: `${skill.level}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12">
      {/* Technical Skills */}
      <div className="group relative bg-slate-800/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
              Technical Skills
            </h3>
            <p className="text-slate-400 text-sm">Programming languages, frameworks, and technical tools</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Soft Skills */}
      <div className="group relative bg-slate-800/20 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-200 group-hover:bg-clip-text transition-all duration-300">
              Soft Skills
            </h3>
            <p className="text-slate-400 text-sm">Personal attributes and interpersonal skills</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {softSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;