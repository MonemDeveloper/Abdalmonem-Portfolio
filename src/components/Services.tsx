import React from 'react';
import { Code, Smartphone, Database, Cloud, Users, Zap, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Developing complete web applications using Node.js, TypeScript, Angular, and modern JavaScript technologies',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Smartphone,
      title: 'Android Applications',
      description: 'Developing high-performance native Android applications using Java and Kotlin with 7+ years of experience',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Flutter Applications',
      description: 'Developing cross-platform applications using Flutter with outstanding user experience and performance',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, real-time features, and database management',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Cloud,
      title: 'Real-time Applications',
      description: 'Developing real-time applications using Socket.IO and modern communication technologies',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Electronic Payment Systems',
      description: 'Developing secure electronic payment solutions with POS device support like Aisino and Telpo',
      gradient: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
              Services Offered
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mt-8 leading-relaxed">
            I provide a comprehensive range of technical services to help your business grow and thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-blue-400 font-semibold group-hover:text-white transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;