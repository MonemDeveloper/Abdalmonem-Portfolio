import React from 'react';
import { Star, ArrowRight, Eye, Code } from 'lucide-react';
import { projects } from '../data/cvData';

const Portfolio: React.FC = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
              Portfolio
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-8 leading-relaxed">
            Showcasing innovative solutions and cutting-edge applications that drive digital transformation
          </p>
        </div>

        {/* Featured Projects - Modern Grid */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              <h3 className="text-3xl font-bold text-white">Featured Projects</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className={`group relative bg-slate-800/30 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden border border-slate-700/30 hover:border-slate-600/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 ${index % 2 === 0 ? 'lg:mt-8' : ''}`}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                        <Star className="w-4 h-4" />
                        Featured
                      </div>
                    </div>
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
                          >
                            <Eye className="w-6 h-6 text-white" />
                          </a>
                        )}
                        {project.github && (
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
                          >
                            <Code className="w-6 h-6 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h4>
                    <p className="text-slate-300 mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">Technologies</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span 
                            key={idx}
                            className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-lg text-sm font-medium border border-slate-600/50 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="bg-slate-700/50 text-slate-400 px-3 py-1 rounded-lg text-sm font-medium border border-slate-600/50">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
                        >
                          <Eye className="w-4 h-4" />
                          View Project
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 border border-slate-600/50 hover:border-slate-500/50"
                        >
                          <Code className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects - Compact Grid */}
        <div>
          <div className="flex items-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <ArrowRight className="w-6 h-6 text-blue-500" />
              <h3 className="text-3xl font-bold text-white">Other Projects</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div 
                key={project.id}
                className="group relative bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h4>
                    <div className="flex gap-2">
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-lg"
                        >
                          <Eye className="w-4 h-4" />
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-lg"
                        >
                          <Code className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded-lg text-xs border border-slate-600/50 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-slate-700/50 text-slate-400 px-2 py-1 rounded-lg text-xs border border-slate-600/50">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;