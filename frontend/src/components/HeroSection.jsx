import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFF8F0 0%, #FFEEE6 50%, #F5E6DC 100%)'
      }}
    >
      {/* Floating elements with parallax */}
      <div
        className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, #C8D5B9 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.3}px)`,
          animation: 'gentleFloat 6s ease-in-out infinite'
        }}
      />
      <div
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, #FFE5D9 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.2}px)`,
          animation: 'gentleFloat 8s ease-in-out infinite 1s'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8 fade-in-up">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full" style={{ background: 'rgba(255, 229, 217, 0.4)' }}>
            <Sparkles className="w-4 h-4" style={{ color: '#C8D5B9' }} />
            <span className="text-sm font-medium" style={{ color: '#2c3e50' }}>Connecting Generations, Nurturing Minds</span>
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold leading-tight"
            style={{
              fontFamily: 'Merriweather, serif',
              color: '#1a202c',
              lineHeight: '1.2'
            }}
          >
            Where Wisdom Meets
            <span
              className="block mt-2"
              style={{
                background: 'linear-gradient(135deg, #FFB4A2 0%, #C8D5B9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Wonder
            </span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#4a5568' }}>
            Sage & Seed connects seniors with neurodegenerative conditions with young adults for one-to-one online video conversations. Gentle social engagement that improves mood, reduces depressive symptoms, and enhances quality of life.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #FFE5D9 0%, #F5D5C8 100%)',
                color: '#2c3e50',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 229, 217, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Heart className="w-5 h-5 mr-2" />
              Join as a Volunteer
            </Button>

            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-semibold transition-all duration-300"
              style={{
                borderColor: '#C8D5B9',
                color: '#2c3e50',
                borderWidth: '2px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(200, 213, 185, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              For Caregivers
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center space-x-6 pt-4">
            <div className="text-sm" style={{ color: '#5a6c7d' }}>
              <div className="font-semibold text-2xl" style={{ color: '#2c3e50' }}>1-to-1</div>
              <div>Video Sessions</div>
            </div>
            <div className="w-px h-12" style={{ background: '#C8D5B9' }}></div>
            <div className="text-sm" style={{ color: '#5a6c7d' }}>
              <div className="font-semibold text-2xl" style={{ color: '#2c3e50' }}>15+</div>
              <div>Languages</div>
            </div>
            <div className="w-px h-12" style={{ background: '#C8D5B9' }}></div>
            <div className="text-sm" style={{ color: '#5a6c7d' }}>
              <div className="font-semibold text-2xl" style={{ color: '#2c3e50' }}>100%</div>
              <div>Privacy Focused</div>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div
          className="relative"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
            <img
              src="https://images.unsplash.com/photo-1758612897487-41d0c44c4420"
              alt="Grandfather and grandson sharing a joyful moment"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(255, 229, 217, 0.2) 100%)'
              }}
            />
          </div>

          {/* Floating card */}
          <div
            className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl gentle-pulse"
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
              maxWidth: '280px'
            }}
          >
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: '#FFE5D9' }}>
                <Heart className="w-6 h-6" style={{ color: '#C8D5B9' }} />
              </div>
              <div>
                <div className="font-semibold" style={{ color: '#2c3e50' }}>Meaningful Moments</div>
                <div className="text-sm mt-1" style={{ color: '#5a6c7d' }}>
                  Every conversation creates lasting joy and connection
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
