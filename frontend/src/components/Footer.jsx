import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      className="py-16 relative"
      style={{ background: 'linear-gradient(180deg, #FFF8F0 0%, #FFE5D9 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
       

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg" style={{ color: '#2c3e50' }}>Quick Links</h3>
            <ul className="space-y-3">
              {[
                { id: 'about', label: 'About Us' },
                { id: 'how-it-works', label: 'How It Works' },
                { id: 'offerings', label: 'Offerings' },
                { id: 'benefits', label: 'Benefits' },
                { id: 'research', label: 'Research' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm transition-colors duration-200 hover:underline"
                    style={{ color: '#5a6c7d' }}
                    onMouseEnter={(e) => e.target.style.color = '#2c3e50'}
                    onMouseLeave={(e) => e.target.style.color = '#5a6c7d'}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg" style={{ color: '#2c3e50' }}>Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#C8D5B9' }} />
                <a href="mailto:rayan.ashish@icloud.com" className="text-sm hover:underline" style={{ color: '#5a6c7d' }}>
                  rayan.ashish@icloud.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#C8D5B9' }} />
                <a href="tel:+1-555-SAGE-123" className="text-sm hover:underline" style={{ color: '#5a6c7d' }}>
                  +1 (555) SAGE-123
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: '#C8D5B9' }} />
                <span className="text-sm" style={{ color: '#5a6c7d' }}>
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          style={{ borderColor: 'rgba(200, 213, 185, 0.3)' }}
        >
          <p className="text-sm" style={{ color: '#5a6c7d' }}>
            © 2024 Sage & Seed. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <button
              className="text-sm transition-colors duration-200 hover:underline"
              style={{ color: '#5a6c7d' }}
              onMouseEnter={(e) => e.target.style.color = '#2c3e50'}
              onMouseLeave={(e) => e.target.style.color = '#5a6c7d'}
            >
              Privacy Policy
            </button>
            <button
              className="text-sm transition-colors duration-200 hover:underline"
              style={{ color: '#5a6c7d' }}
              onMouseEnter={(e) => e.target.style.color = '#2c3e50'}
              onMouseLeave={(e) => e.target.style.color = '#5a6c7d'}
            >
              Terms of Service
            </button>
            <button
              className="text-sm transition-colors duration-200 hover:underline"
              style={{ color: '#5a6c7d' }}
              onMouseEnter={(e) => e.target.style.color = '#2c3e50'}
              onMouseLeave={(e) => e.target.style.color = '#5a6c7d'}
            >
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
