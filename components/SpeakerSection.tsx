import React from 'react';
import { Linkedin, Github, Award, Briefcase, Link2 } from 'lucide-react';
import adityaSethImg from '@/assets/aditya_seth2.png'; 
import gouravGhoshalImg from "@/assets/gourav_ghoshal2.png";
import Image from 'next/image';

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Mr. Aditya Seth",
      image: adityaSethImg,
      credentials: [
        { icon: Briefcase, text: "SWE at TBAI" },
        { icon: Award, text: "Gold Microsoft Learn Student Ambassador" }
      ],
      topic: "GitHub and Open-Source Contributions for Beginners",
      topicDescription: "Master the basics of version control and learn how to contribute to open-source projects effectively.",
      linkedin: "https://www.linkedin.com/in/aditya-seth-270833233/",
      github: "https://github.com/AdityaSeth777",
      portfolio: "https://adityaseth.in/"
    },
    {
      name: "Mr. Gourav Ghosal",
      image: gouravGhoshalImg, 
      credentials: [
        { icon: Briefcase, text: "Full Stack Developer at Truxt.ai, New Jersey, USA" },
        { icon: Award, text: "Mentor at Hack4Bengal 4.0" }
      ],
      topic: "Building Applications Using GEN-AI",
      topicDescription: "Discover how to integrate generative AI into modern applications and create intelligent solutions.",
      linkedin: "https://www.linkedin.com/in/gourav-ghosal/",
      github: "https://github.com/gourav221b", 
      portfolio: "https://devgg.in/"
    }
  ];

  return (
    <section id='speakers' className="py-20 bg-gradient-to-b from-slate-900 to-slate-950 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Meet Our Esteemed Speakers
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Learn from industry experts and passionate technologists
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-microsoft-blue/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-microsoft-blue/20"
            >
              {/* Image Container - Full Cover */}
              <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <Image  
                  src={speaker.image}
                  alt={`${speaker.name} - Speaker`}
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Gradient Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              </div>

              <div className="p-8">
                <a 
                  href={speaker.portfolio} 
                  target='_blank'>
                  <h3 className="text-2xl font-bold mb-2 text-white">{speaker.name}</h3>
                </a>
                
                {/* Credentials */}
                <div className="space-y-2 mb-4">
                  {speaker.credentials.map((cred, credIndex) => (
                    <div key={credIndex} className="flex items-center gap-2 text-gray-400">
                      <cred.icon className="w-4 h-4 text-microsoft-blue" />
                      <span className="text-sm">{cred.text}</span>
                    </div>
                  ))}
                </div>

                {/* Topic */}
                <div className="bg-slate-900/50 rounded-xl p-4 mb-4 border border-slate-700">
                  <p className="text-xs text-microsoft-blue font-semibold mb-1">SESSION TOPIC</p>
                  <h4 className="text-lg font-bold text-white mb-2">{speaker.topic}</h4>
                  <p className="text-sm text-gray-400">{speaker.topicDescription}</p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  <a 
                    href={speaker.linkedin}
                    target='_blank'
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-microsoft-blue rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5"/>
                  </a>

                  <a 
                    href={speaker.github}
                    target='_blank'
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-5 h-5"/>
                  </a>

                  <a 
                    href={speaker.portfolio}
                    target='_blank'
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <Link2 className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;