import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-microsoft-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-microsoft-blue/10 border border-microsoft-blue/30 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-microsoft-blue" />
            <span className="text-sm font-semibold text-microsoft-blue">
              <a
                href="https://linktr.ee/msagnit" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-all" 
              >
                MSA-GNIT Chapter
              </a> Presents
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-microsoft-blue bg-clip-text text-transparent">
              Inauguration Ceremony
            </span>
            <br />
            <span className="text-white">& Awareness on</span>
            <br />
            <span className="text-microsoft-blue">Microsoft Technologies</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join us for the official launch of Microsoft Student Ambassadors GNIT Chapter. 
            Learn about GitHub, Open-Source contributions, and building Applications with Gen-AI.
          </p>

          {/* Event Details Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-microsoft-blue/50 transition-all duration-300 hover:scale-105">
              <Calendar className="w-8 h-8 text-microsoft-blue mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">Date</p>
              <p className="text-lg font-bold text-white">19th November 2025</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-microsoft-blue/50 transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 text-microsoft-blue mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">Time</p>
              <p className="text-lg font-bold text-white">10:30 AM</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-microsoft-blue/50 transition-all duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 text-microsoft-blue mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">Venue</p>
              <p className="text-lg font-bold text-white">GNIT Auditorium</p>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href=" https://forms.office.com/r/CyxDijB5Ud" 
            target='_blank'
            id="register"
            className="inline-block px-10 py-4 bg-gradient-to-r from-microsoft-blue to-blue-600 hover:from-microsoft-blue-dark hover:to-blue-700 text-white text-lg font-bold rounded-xl transition-all duration-300 hover:scale-110 glow-effect"
          >
            Register Now - It&apos;s Free!
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;