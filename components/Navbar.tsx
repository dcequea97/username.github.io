import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = NAV_LINKS[language];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B1120]/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-emerald-400 font-bold text-xl tracking-wider">
          &lt;DavidCequea/&gt;
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={toggleLanguage}
            className="border border-emerald-400 text-emerald-400 px-4 py-2 rounded text-sm hover:bg-emerald-400/10 transition-colors font-mono min-w-[3.5rem]"
          >
             {language === 'en' ? 'ES' : 'EN'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={toggleLanguage}
            className="border border-emerald-400 text-emerald-400 px-3 py-1 rounded text-xs hover:bg-emerald-400/10 transition-colors font-mono"
          >
             {language === 'en' ? 'ES' : 'EN'}
          </button>
          <button 
            className="text-slate-300 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#112240] border-t border-slate-800 shadow-xl">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-slate-300 hover:text-emerald-400 block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
