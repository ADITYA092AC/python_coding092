import React, { useEffect, useRef, useState } from 'react';
import { Heart, Users, TrendingUp } from 'lucide-react';
import { benefits } from '../mock';

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('caregivers');
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
      id="benefits"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}
          >
            Everyone Grows
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ color: '#4a5568' }}
          >
            Connection is a two-way gift
          </p>
        </div>

        {/* Tab switcher */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className="inline-flex rounded-full p-2"
            style={{ background: 'rgba(200, 213, 185, 0.15)' }}
          >
            <button
              onClick={() => setActiveTab('caregivers')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300`}
              style={{
                background: activeTab === 'caregivers'
                  ? 'linear-gradient(135deg, #FFE5D9 0%, #F5D5C8 100%)'
                  : 'transparent',
                color: '#2c3e50',
                boxShadow: activeTab === 'caregivers' ? '0 4px 12px rgba(255, 229, 217, 0.3)' : 'none'
              }}
            >
              For Caregivers & Families
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300`}
              style={{
                background: activeTab === 'students'
                  ? 'linear-gradient(135deg, #FFE5D9 0%, #F5D5C8 100%)'
                  : 'transparent',
                color: '#2c3e50',
                boxShadow: activeTab === 'students' ? '0 4px 12px rgba(255, 229, 217, 0.3)' : 'none'
              }}
            >
              For Students & Volunteers
            </button>
          </div>
        </div>

        {/* Content area */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              activeTab === 'caregivers' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ display: activeTab === 'caregivers' ? 'block' : 'none' }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1762955913084-96ea3f986468"
                alt="Caregiver assisting with gentle activity"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 ${
              activeTab === 'students' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ display: activeTab === 'students' ? 'block' : 'none' }}
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1758874960735-16f7b37aae4d"
                alt="Young adult and senior sharing a warm moment"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>

          {/* Benefits list */}
          <div className="space-y-6">
            {benefits[activeTab].map((benefit, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  background: 'linear-gradient(135deg, #FFF8F0 0%, #FFEEE6 100%)',
                  border: '2px solid rgba(200, 213, 185, 0.2)',
                  transitionDelay: `${index * 100 + 500}ms`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 229, 217, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#2c3e50' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#5a6c7d' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom emotional note */}
        <div
          className={`mt-16 p-10 rounded-3xl text-center transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(255, 229, 217, 0.3) 0%, rgba(200, 213, 185, 0.3) 100%)',
            border: '2px solid rgba(200, 213, 185, 0.4)'
          }}
        >
          <Heart className="w-12 h-12 mx-auto mb-4" style={{ color: '#C8D5B9' }} />
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}>
            This is more than a service.
          </h3>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#4a5568' }}>
            It's a reminder that everyone—regardless of age or ability—has something valuable to give and receive.
            Sage & Seed is where generations meet, and where human connection heals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
