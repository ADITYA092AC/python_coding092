import React, { useEffect, useRef, useState } from 'react';
import { Music, BookOpen, Palette, Puzzle, MessageCircle, Activity } from 'lucide-react';
import { offerings } from '../mock';

const iconMap = {
  music: Music,
  'book-open': BookOpen,
  palette: Palette,
  puzzle: Puzzle,
  'message-circle': MessageCircle,
  activity: Activity
};

const OfferingsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="offerings"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FFE5D9 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}
          >
            Choose Your Journey
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ color: '#4a5568' }}
          >
            Every session is tailored to interests and comfort. No pressure, just presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = iconMap[offering.icon];
            const isHovered = hoveredCard === offering.id;

            return (
              <div
                key={offering.id}
                className={`group relative p-8 rounded-3xl transition-all duration-700 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{
                  background: isHovered
                    ? 'linear-gradient(135deg, #FFE5D9 0%, #F5D5C8 100%)'
                    : 'linear-gradient(135deg, #FFF8F0 0%, #FFEEE6 100%)',
                  border: `2px solid ${isHovered ? '#FFE5D9' : 'rgba(200, 213, 185, 0.2)'}`,
                  transitionDelay: `${index * 100}ms`,
                  transform: isHovered ? 'translateY(-12px) scale(1.02)' : 'translateY(0) scale(1)'
                }}
                onMouseEnter={() => setHoveredCard(offering.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon with animation */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                  style={{
                    background: isHovered
                      ? 'linear-gradient(135deg, #C8D5B9 0%, #A8C5A0 100%)'
                      : 'rgba(200, 213, 185, 0.3)',
                    transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)'
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: '#2c3e50' }} />
                </div>

                <h3 className="text-2xl font-semibold mb-3" style={{ color: '#2c3e50' }}>
                  {offering.title}
                </h3>
                <p className="mb-4 leading-relaxed" style={{ color: '#5a6c7d' }}>
                  {offering.description}
                </p>

                {/* Preview text with fade effect */}
                <div
                  className={`mt-4 pt-4 border-t transition-all duration-500 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}
                  style={{ borderColor: 'rgba(200, 213, 185, 0.3)' }}
                >
                  <p className="text-sm italic" style={{ color: '#2c3e50' }}>
                    "{offering.preview}"
                  </p>
                </div>

                {/* Floating elements */}
                {isHovered && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gentle-float" style={{ background: 'linear-gradient(135deg, #FFE5D9 0%, #C8D5B9 100%)' }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-lg" style={{ color: '#5a6c7d' }}>
            <span className="font-semibold" style={{ color: '#2c3e50' }}>Not sure what to choose?</span> That's okay.
            Our trained volunteers and AI prompts will help guide conversations naturally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
