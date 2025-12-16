import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Globe, MessageCircle, Shield } from 'lucide-react';

const AISection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Sparkles,
      title: 'Real-time Prompts',
      description: 'AI assists the volunteer continuously causing real time prompts to guide conversations naturally.'
    },
    {
      icon: Globe,
      title: 'Intelligent Language Support',
      description: 'Supports conversations in multiple languages. Volunteers get real-time song or story recommendations in the patient\'s language.'
    },
    {
      icon: MessageCircle,
      title: 'Mood Estimation',
      description: 'Estimates mood from facial cues to help volunteers understand and respond to emotional states.'
    },
    {
      icon: Shield,
      title: 'Continuous Assistance',
      description: 'AI assists the volunteer continuously during the session to ensure a smooth and safe interaction.'
    }
  ];

  return (
    <section
      id="ai-support"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Visual */}
          <div
            className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1758691031455-9ce2e45f11f4"
                  alt="Couple engaging with technology together"
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>

              {/* Floating thought bubble */}
              <div
                className="absolute -top-4 -right-4 p-4 rounded-2xl shadow-xl max-w-xs"
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  animation: 'gentleFloat 4s ease-in-out infinite'
                }}
              >
                <div className="flex items-start space-x-2">
                  <Sparkles className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#C8D5B9' }} />
                  <p className="text-sm" style={{ color: '#2c3e50' }}>
                    <span className="font-semibold">AI Suggestion:</span> "Ask about their favorite childhood memory"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}
              >
                AI as a Gentle Companion
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#4a5568' }}>
                Technology should support, not replace, human connection. Our AI acts as a quiet guide in the background—never
                intrusive, always helpful.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#4a5568' }}>
                It suggests conversation starters, adapts to language needs, and ensures every session feels natural, warm, and safe.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md"
                    style={{
                      background: 'rgba(255, 248, 240, 0.5)',
                      border: '1px solid rgba(200, 213, 185, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 229, 217, 0.3)';
                      e.currentTarget.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 248, 240, 0.5)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #FFE5D9 0%, #C8D5B9 100%)' }}
                    >
                      <Icon className="w-6 h-6" style={{ color: '#2c3e50' }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1" style={{ color: '#2c3e50' }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm" style={{ color: '#5a6c7d' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
