import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        title: "New Study Confirms Benefits of Intergenerational Connection",
        date: "December 12, 2025",
        readTime: "4 min read",
        image: "/news/research.png",
        category: "Research",
        summary: "Recent findings published in the Journal of Gerontology highlight significant mood improvements in seniors participating in regular video visits."
    },
    {
        id: 2,
        title: "Sage & Seed Expands to 50 New Schools",
        date: "November 28, 2025",
        readTime: "3 min read",
        image: "/news/community.png",
        category: "Community",
        summary: "High school students across the country are joining our mission to bridge the generational gap and find purpose in volunteering."
    },
    {
        id: 3,
        title: "Introducing Multilingual AI Support",
        date: "November 15, 2025",
        readTime: "5 min read",
        image: "/news/ai.png",
        category: "Platform Update",
        summary: "Our new AI companion now supports real-time translation and cultural prompts for over 15 languages, making connection accessible to all."
    }
];

const NewsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="news"
            ref={sectionRef}
            className="py-24 relative overflow-hidden"
            style={{ background: '#FFF8F0' }}
        >
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
                style={{ background: 'radial-gradient(circle, #C8D5B9 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-pulse"
                style={{ background: 'radial-gradient(circle, #FFE5D9 0%, transparent 70%)', transform: 'translate(-30%, 30%)', animationDuration: '8s' }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="text-left max-w-2xl">
                        <h2
                            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ fontFamily: 'Merriweather, serif', color: '#1a202c' }}
                        >
                            Latest Updates
                        </h2>
                        <p
                            className={`text-lg md:text-xl leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ color: '#4a5568' }}
                        >
                            Stories of connection, research breakthroughs, and community growth.
                        </p>
                    </div>

                    <button
                        className={`hidden md:flex items-center space-x-2 text-lg font-semibold px-6 py-3 rounded-full hover:bg-white hover:shadow-md transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                            }`}
                        style={{ color: '#2c3e50', border: '1px solid rgba(200, 213, 185, 0.5)' }}
                    >
                        <span>View all news</span>
                        <ArrowRight className="w-5 h-5 ml-1" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {newsItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`group relative bg-white rounded-[2rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                                }`}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.02)', // Subtle base shadow
                            }}
                        >
                            {/* Hover Glow Border Effect */}
                            <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent transition-colors duration-500 group-hover:border-[#C8D5B9]/30 pointer-events-none z-20" />

                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute top-5 left-5 z-10">
                                    <span
                                        className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase backdrop-blur-md shadow-sm transition-transform duration-300 group-hover:scale-105"
                                        style={{ background: 'rgba(255, 255, 255, 0.85)', color: '#2c3e50' }}
                                    >
                                        {item.category}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 z-10" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[2000ms] ease-out"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="flex items-center text-sm mb-5 space-x-4 font-medium" style={{ color: '#889eb3' }}>
                                    <div className="flex items-center bg-[#FFF8F0] px-3 py-1 rounded-full">
                                        <Calendar className="w-3.5 h-3.5 mr-2 text-[#C8D5B9]" />
                                        {item.date}
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="w-3.5 h-3.5 mr-2 text-[#C8D5B9]" />
                                        {item.readTime}
                                    </div>
                                </div>

                                <h3
                                    className="text-2xl font-bold mb-4 leading-snug group-hover:text-[#5a6c7d] transition-colors duration-300"
                                    style={{ color: '#1a202c', fontFamily: 'Merriweather, serif' }}
                                >
                                    {item.title}
                                </h3>

                                <p className="text-base leading-relaxed mb-8 line-clamp-3" style={{ color: '#4a5568' }}>
                                    {item.summary}
                                </p>

                                <div
                                    className="inline-flex items-center font-bold text-sm border-b-2 border-transparent group-hover:border-[#C8D5B9] pb-0.5 transition-all duration-300"
                                    style={{ color: '#2c3e50' }}
                                >
                                    Read Article
                                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <button
                        className="inline-flex items-center space-x-2 text-lg font-semibold px-8 py-4 rounded-full bg-white shadow-sm border border-[#C8D5B9]/50"
                        style={{ color: '#2c3e50' }}
                    >
                        <span>View all news</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
