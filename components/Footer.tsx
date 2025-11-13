import React from 'react';
import { Mail, Linkedin, Github, Instagram, MapPin, ExternalLink, Facebook, Link2 } from 'lucide-react';
import Image from 'next/image';
import msaLogo from "@/assets/A.png"
const Footer = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/company/msa-gnit/',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },

    { 
      name: 'Linktree', 
      href: 'https://linktr.ee/msagnit', // Replace with actual Linktree URL
      icon: Link2,
      color: 'hover:text-green-400'
    },

    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/msa.gnit?igsh=MXJvdTNtZDl0dDZkcQ==', 
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/share/17oujEemcb/',
      icon: Facebook,
      color: 'hover:text-blue-400'
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Event', href: '#about' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Agenda', href: '#agenda' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-microsoft-blue to-blue-600 rounded-lg flex items-center justify-center font-bold text-white">
                <Image 
                  src={msaLogo}
                  alt='MSA Logo'
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">MSA-GNIT</h3>
                <p className="text-xs text-gray-400">Microsoft Student Ambassadors - GNIT Chapter</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students through technology, innovation, and community building at GNIT.
            </p>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-microsoft-blue" />
                <a 
                  href="https://gnit.ac.in/"
                  target='_blank'
                >

                  <span>Guru Nanak Institute of Technology, Kolkata</span>
                </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-microsoft-blue transition-colors duration-300 text-sm flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://learn.microsoft.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-microsoft-blue transition-colors duration-300 text-sm flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Microsoft Learn</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-microsoft-blue transition-colors duration-300 text-sm flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a 
                  href="https://azure.microsoft.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-microsoft-blue transition-colors duration-300 text-sm flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Azure for Students</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-slate-700`}
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <a 
              href="mailto:msft.gnit@outlook.com"
              className="flex items-center gap-2 text-gray-400 hover:text-microsoft-blue transition-colors duration-300 text-sm group"
            >
              <Mail className="w-4 h-4" />
              <span className="group-hover:underline">msft.gnit@outlook.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 MSA-GNIT Chapter. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-microsoft-blue transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-microsoft-blue transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-microsoft-blue transition-colors duration-300">
                Code of Conduct
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;