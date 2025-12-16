import React, { useEffect, useRef, useState } from 'react';
import { Users, Heart, Shield, Globe } from 'lucide-react';

const AboutSection = () => {
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

  const values = [
    {
      icon: Heart,
      title: 'Dignity First',
      description: 'Every interaction honors the person, not the condition. We celebrate life stories and present moments.'
    },
    {
      icon: Users,
      title: 'Human Connection',
      description: 'Real conversations between real people. Technology facilitates, but humanity leads.'
    },
    {
      icon: Shield,
      title: 'Safe & Monitored',
      description: 'Privacy-protected, caregiver-approved sessions with AI support and trained volunteers.'
    },
    {
      icon: Globe,
      title: 'Inclusive & Multilingual',
      description: 'Breaking language barriers with AI assistance in 15+ languages, ensuring everyone feels heard.'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #C8D5B9 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}
          >
            What is Sage & Seed?
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#4a5568' }}
          >
            We're more than a platform. We're a movement to restore connection, purpose, and joy across generations.
            Seniors living with dementia gain companionship and engagement. Young adults gain perspective, empathy,
            and the profound gift of being truly needed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`p-8 rounded-2xl transition-all duration-700 hover:shadow-xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #FFF8F0 0%, #FFEEE6 100%)',
                  transitionDelay: `${index * 100 + 400}ms`,
                  border: '1px solid rgba(200, 213, 185, 0.2)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #FFE5D9 0%, #C8D5B9 100%)' }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#2c3e50' }} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>
                  {value.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why it matters */}
        <div
          className={`mt-16 p-10 rounded-3xl transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 229, 217, 0.3) 0%, rgba(200, 213, 185, 0.3) 100%)',
            border: '2px solid rgba(255, 229, 217, 0.5)'
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}>
              Why This Matters
            </h3>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#4a5568' }}>
              Social isolation in dementia accelerates cognitive decline and diminishes quality of life. Yet meaningful human
              connection—even brief, simple conversations—can improve mood, reduce anxiety, and restore a sense of self.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#4a5568' }}>
              For young adults, these connections build emotional intelligence, patience, and purpose in ways no classroom can teach.
              <span className="font-semibold" style={{ color: '#2c3e50' }}> Everyone grows. Everyone matters.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
