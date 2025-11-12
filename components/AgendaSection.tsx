import React from 'react';
import { Clock } from 'lucide-react';

const AgendaSection = () => {
  const agenda = [
    {
      time: "11:00 AM - 11:30 AM",
      title: "Welcome & Inauguration",
      description: "Opening ceremony and official launch of the MSA-GNIT Chapter"
    },
    {
      time: "11:30 AM - 1:00 PM",
      title: "Session 1: GitHub & Open Source",
      description: "Learn version control fundamentals and open-source contribution best practices with Mr. Aditya Seth"
    },
    {
      time: "1:00 - 2:30 PM",
      title: "Session 2: Building with Gen-AI",
      description: "Explore generative AI application development with Mr. Gourav Ghosal"
    },
    {
      time: "2:30 PM",
      title: "Q&A and Closing",
      description: "Interactive discussion, networking, and closing remarks"
    }
  ];

  return (
    <section id='agenda' className="py-20 bg-slate-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Event Agenda
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A carefully crafted schedule for an enriching experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {agenda.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== agenda.length - 1 && (
                <div className="absolute left-4 md:left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-microsoft-blue to-slate-700"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 md:left-2 top-2 w-8 h-8 bg-linear-to-br from-microsoft-blue to-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                <Clock className="w-4 h-4 text-white" />
              </div>

              {/* Content */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-microsoft-blue/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-microsoft-blue/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-microsoft-blue/20 text-microsoft-blue rounded-lg text-sm font-bold mb-2 md:mb-0">
                    {item.time}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;