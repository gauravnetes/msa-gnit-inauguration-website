import React from 'react';
import { Rocket, GitBranch, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Rocket,
      title: "Official Chapter Launch",
      description: "Be part of history as we officially inaugurate the Microsoft Student Ambassadors GNIT Chapter and embark on a journey of innovation."
    },
    {
      icon: GitBranch,
      title: "GitHub & Open Source",
      description: "Learn the fundamentals of GitHub and discover how to make your first open-source contributions with guidance from a Gold MLSA."
    },
    {
      icon: Sparkles,
      title: "Building with Gen-AI",
      description: "Explore the cutting-edge world of Generative AI and learn how to build intelligent applications using modern AI technologies."
    }
  ];

  return (
    <section id='about' className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            What to Expect
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            An exciting day packed with learning, networking, and inspiration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 hover:border-microsoft-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-microsoft-blue/20"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-microsoft-blue to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;