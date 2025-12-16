import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { sessionSteps } from '../mock';

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % sessionSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8F0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}
          >
            How a Session Works
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ color: '#4a5568' }}
          >
            Simple, safe, and guided every step of the way
          </p>
        </div>

        {/* Visual flow with image */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758686254024-f0cf710c54d6"
                alt="Elderly couple engaging in a warm video call"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 50%, rgba(255, 229, 217, 0.3) 100%)'
                }}
              />
            </div>

            {/* Floating indicator */}
            <div
              className="absolute -bottom-4 -right-4 p-4 rounded-2xl shadow-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(12px)',
                animation: 'gentlePulse 3s ease-in-out infinite'
              }}
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" style={{ color: '#C8D5B9' }} />
                <span className="text-sm font-semibold" style={{ color: '#2c3e50' }}>Safe & Monitored</span>
              </div>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            {sessionSteps.map((step, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-500 cursor-pointer ${activeStep === index ? 'shadow-lg' : 'shadow-sm'
                  }`}
                style={{
                  background: activeStep === index
                    ? 'linear-gradient(135deg, #FFE5D9 0%, #F5D5C8 100%)'
                    : '#FFFFFF',
                  border: `2px solid ${activeStep === index ? '#FFE5D9' : 'rgba(200, 213, 185, 0.2)'}`,
                  transform: activeStep === index ? 'scale(1.02)' : 'scale(1)'
                }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="flex items-start space-x-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300"
                    style={{
                      background: activeStep === index
                        ? 'linear-gradient(135deg, #C8D5B9 0%, #A8C5A0 100%)'
                        : 'rgba(200, 213, 185, 0.3)',
                      color: '#2c3e50'
                    }}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#2c3e50' }}>
                      {step.title}
                    </h3>
                    <p style={{ color: '#5a6c7d' }}>
                      {step.description}
                    </p>
                  </div>
                  {activeStep === index && (
                    <ArrowRight className="flex-shrink-0 w-5 h-5 gentle-float" style={{ color: '#2c3e50' }} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session duration and frequency */}
        <div
          className={`text-center p-8 rounded-2xl transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          style={{
            background: 'rgba(200, 213, 185, 0.15)',
            border: '1px solid rgba(200, 213, 185, 0.3)'
          }}
        >
          <p className="text-lg" style={{ color: '#4a5568' }}>
            <span className="font-semibold" style={{ color: '#2c3e50' }}>Sessions are 30-45 minutes</span>, scheduled at times that work for everyone.
            Many families choose <span className="font-semibold" style={{ color: '#2c3e50' }}>2-3 sessions per week</span> for
            consistency and routine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
