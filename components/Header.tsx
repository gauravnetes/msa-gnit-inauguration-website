'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import msaLogo from "@/assets/A.png"
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Agenda', href: '#agenda' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-800 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Made Bigger and More Prominent */}
          <a href="#home" className="flex items-center gap-4 group">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-microsoft-blue to-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-xl md:text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-microsoft-blue/30">
              <Image
                src={msaLogo}
                alt='MSA Logo'
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white">MSA-GNIT</h1>
              <p className="text-xs md:text-sm text-gray-400">Microsoft Student Ambassadors - GNIT Chapter</p>
              <p className="text-xs text-gray-500 hidden sm:block">Guru Nanak Institute of Technology, Kolkata</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-microsoft-blue font-medium transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-microsoft-blue group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            <a 
              href=" https://forms.office.com/r/CyxDijB5Ud" 
              target='_blank'
              className="px-6 py-2 bg-microsoft-blue hover:bg-microsoft-blue-dark text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-microsoft-blue transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-3 py-4 border-t border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-microsoft-blue font-medium transition-colors duration-300 px-3 py-2 hover:bg-slate-800/50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-2 bg-microsoft-blue hover:bg-microsoft-blue-dark text-white rounded-lg font-semibold transition-all duration-300 text-center mt-2"
            >
              Register Now
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;