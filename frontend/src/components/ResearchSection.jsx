import React, { useEffect, useRef, useState } from 'react';
import { FileText, ExternalLink, TrendingUp } from 'lucide-react';
import { researchArticles } from '../mock';

const ResearchSection = () => {
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

  return (
    <section
      id="research"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF8F0 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(200, 213, 185, 0.2)' }}>
            <TrendingUp className="w-4 h-4" style={{ color: '#C8D5B9' }} />
            <span className="text-sm font-medium" style={{ color: '#2c3e50' }}>Evidence-Based Approach</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}
          >
            Grounded in Research
          </h2>
          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ color: '#4a5568' }}
          >
            Our approach is informed by decades of research on social engagement, cognitive health, and intergenerational programming.
            We're not just hopeful—we're evidence-based.
          </p>
        </div>

        {/* Research articles */}
        <div className="space-y-6 mb-12">
          {researchArticles.map((article, index) => (
            <div
              key={article.id}
              className={`p-8 rounded-2xl transition-all duration-700 cursor-pointer group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                border: '2px solid rgba(200, 213, 185, 0.2)',
                transitionDelay: `${index * 150}ms`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #FFF8F0 0%, #FFEEE6 100%)';
                e.currentTarget.style.borderColor = '#FFE5D9';
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 229, 217, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.borderColor = 'rgba(200, 213, 185, 0.2)';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(200, 213, 185, 0.3)' }}
                    >
                      <FileText className="w-5 h-5" style={{ color: '#2c3e50' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold" style={{ color: '#2c3e50' }}>
                        {article.title}
                      </h3>
                      <p className="text-sm" style={{ color: '#5a6c7d' }}>
                        {article.source} • {article.year}
                      </p>
                    </div>
                  </div>
                  <p className="leading-relaxed ml-13" style={{ color: '#4a5568' }}>
                    {article.summary}
                  </p>
                </div>
                <ExternalLink
                  className="flex-shrink-0 ml-4 transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: '#C8D5B9' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div
            className="text-center p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 229, 217, 0.3) 0%, rgba(200, 213, 185, 0.2) 100%)',
              border: '2px solid rgba(255, 229, 217, 0.4)'
            }}
          >
            <div className="text-4xl font-bold mb-2" style={{ color: '#2c3e50' }}>73%</div>
            <p className="text-sm" style={{ color: '#5a6c7d' }}>
              Improvement in mood scores after regular social engagement
            </p>
          </div>

          <div
            className="text-center p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 229, 217, 0.3) 0%, rgba(200, 213, 185, 0.2) 100%)',
              border: '2px solid rgba(255, 229, 217, 0.4)'
            }}
          >
            <div className="text-4xl font-bold mb-2" style={{ color: '#2c3e50' }}>89%</div>
            <p className="text-sm" style={{ color: '#5a6c7d' }}>
              Of caregivers report reduced stress with respite support
            </p>
          </div>

          <div
            className="text-center p-8 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 229, 217, 0.3) 0%, rgba(200, 213, 185, 0.2) 100%)',
              border: '2px solid rgba(255, 229, 217, 0.4)'
            }}
          >
            <div className="text-4xl font-bold mb-2" style={{ color: '#2c3e50' }}>95%</div>
            <p className="text-sm" style={{ color: '#5a6c7d' }}>
              Of young volunteers report increased empathy and purpose
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
