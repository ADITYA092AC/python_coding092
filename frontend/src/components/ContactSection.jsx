import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'caregiver',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);
  const { toast } = useToast();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with backend API
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Received! 💙",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', role: 'caregiver', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}
          >
            Start the Conversation
          </h2>
          <p
            className={`text-lg md:text-xl max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ color: '#4a5568' }}
          >
            Whether you're a caregiver, volunteer, or institution, we'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#2c3e50' }}>
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className="rounded-xl py-6"
                  style={{
                    borderColor: 'rgba(200, 213, 185, 0.4)',
                    background: '#FFF8F0'
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#2c3e50' }}>
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@example.com"
                  className="rounded-xl py-6"
                  style={{
                    borderColor: 'rgba(200, 213, 185, 0.4)',
                    background: '#FFF8F0'
                  }}
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium mb-2" style={{ color: '#2c3e50' }}>
                  I am a...
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full rounded-xl py-3 px-4 border transition-colors duration-200"
                  style={{
                    borderColor: 'rgba(200, 213, 185, 0.4)',
                    background: '#FFF8F0',
                    color: '#2c3e50'
                  }}
                >
                  <option value="caregiver">Caregiver or Family Member</option>
                  <option value="volunteer">Student or Volunteer</option>
                  <option value="institution">Institution or Care Facility</option>
                  <option value="partner">Potential Partner</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#2c3e50' }}>
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help..."
                  rows={5}
                  className="rounded-xl"
                  style={{
                    borderColor: 'rgba(200, 213, 185, 0.4)',
                    background: '#FFF8F0'
                  }}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl py-6 text-base font-semibold transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FFE5D9 0%, #F5D5C8 100%)',
                  color: '#2c3e50',
                  border: 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 229, 217, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Contact info & trust signals */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
          >
            {/* Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1762955911431-4c44c7c3f408"
                alt="Caregiver engaging in creative activity"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4/3' }}
              />
            </div>

            {/* Contact details */}
            <div
              className="p-8 rounded-2xl space-y-6"
              style={{
                background: 'linear-gradient(135deg, #FFF8F0 0%, #FFEEE6 100%)',
                border: '2px solid rgba(200, 213, 185, 0.2)'
              }}
            >
              <div className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(200, 213, 185, 0.3)' }}
                >
                  <Mail className="w-6 h-6" style={{ color: '#2c3e50' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: '#2c3e50' }}>Email Us</div>
                  <a href="mailto:rayan.ashish@icloud.com" className="text-sm hover:underline" style={{ color: '#5a6c7d' }}>
                    rayan.ashish@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(200, 213, 185, 0.3)' }}
                >
                  <Phone className="w-6 h-6" style={{ color: '#2c3e50' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: '#2c3e50' }}>Call Us</div>
                  <a href="tel:+1-555-SAGE-123" className="text-sm hover:underline" style={{ color: '#5a6c7d' }}>
                    +1 (555) SAGE-123
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(200, 213, 185, 0.3)' }}
                >
                  <MapPin className="w-6 h-6" style={{ color: '#2c3e50' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: '#2c3e50' }}>Visit Us</div>
                  <p className="text-sm" style={{ color: '#5a6c7d' }}>
                    San Francisco, CA<br />
                    Virtual sessions available worldwide
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div
              className="p-6 rounded-2xl text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 229, 217, 0.3) 0%, rgba(200, 213, 185, 0.3) 100%)',
                border: '2px solid rgba(200, 213, 185, 0.4)'
              }}
            >
              <p className="text-sm font-medium" style={{ color: '#2c3e50' }}>
                <span className="block text-2xl mb-2">🔒</span>
                Your privacy is sacred. All communications are confidential and HIPAA-compliant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
