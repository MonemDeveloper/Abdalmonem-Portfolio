import React from 'react';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Globe, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/cvData';

const Hero: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/ABDALMONEM-BADWI_Full-Stack_CV.pdf';
    link.download = 'ABDALMONEM-BADWI_Full-Stack_CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:border-blue-400/50 transition-all duration-500">
                <img 
                  src="/myphoto.png"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 w-16 h-16 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl lg:text-4xl text-slate-300 mb-6 font-light">
                Full-Stack Developer
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {personalInfo.summary}
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <Globe className="w-5 h-5 text-blue-400" />
                <a href={personalInfo.website} className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Personal Website
                </a>
              </div>
            </div>

            {/* Social Links & Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex gap-4">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
              
              <button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 flex items-center gap-3 group"
              >
                <Download className="w-5 h-5" />
                Download CV
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;