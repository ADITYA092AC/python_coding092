import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'how-it-works', 'offerings', 'benefits', 'research', 'news', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Close mobile menu on click
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'offerings', label: 'Offerings' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'research', label: 'Research' },
    { id: 'news', label: 'News' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || isMenuOpen
        ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src="/logo.png" alt="Sage & Seed Logo" className="w-10 h-10 rounded-full object-cover" />
          <span className="text-xl font-bold" style={{ fontFamily: 'Merriweather, serif', color: '#2c3e50' }}>
            Sage & Seed
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 relative ${activeSection === item.id ? 'text-[#2c3e50]' : 'text-[#5a6c7d] hover:text-[#2c3e50]'
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #FFE5D9 0%, #C8D5B9 100%)' }}
                ></span>
              )}
            </button>
          ))}
        </div>

        <Button
          onClick={() => scrollToSection('contact')}
          className="hidden md:block rounded-full px-6 py-2 font-medium transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #FFE5D9 0%, #F5D5C8 100%)',
            color: '#2c3e50',
            border: 'none'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 24px rgba(255, 229, 217, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Get Started
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#2c3e50]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          marginTop: "64px", // height of the navbar approximately
          height: "calc(100vh - 64px)",
          borderLeft: "1px solid rgba(0,0,0,0.05)"
        }}
      >
        <div className="flex flex-col p-6 space-y-6 h-full overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-lg text-left font-medium transition-all duration-300 ${activeSection === item.id ? 'text-[#2c3e50] font-bold' : 'text-[#5a6c7d]'
                }`}
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection('contact')}
            className="w-full rounded-full px-6 py-3 font-medium transition-all duration-300 mt-4"
            style={{
              background: 'linear-gradient(135deg, #FFE5D9 0%, #F5D5C8 100%)',
              color: '#2c3e50',
              border: 'none'
            }}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Overlay background for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          style={{ top: "64px" }}
        />
      )}
    </nav>
  );
};

export default Navigation;
