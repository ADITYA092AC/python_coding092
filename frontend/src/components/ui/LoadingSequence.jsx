import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const frames = [
    {
        src: '/loading/frame1.png',
        text: 'Waiting for a friend...',
        alt: 'Elder sitting alone peacefully'
    },
    {
        src: '/loading/frame2.png',
        text: 'Someone is coming...',
        alt: 'Student walking towards elder waving'
    },
    {
        src: '/loading/frame3.png',
        text: 'Someone is here with you.',
        alt: 'Elder and student sitting together holding hands'
    }
];

const LoadingSequence = ({ onComplete }) => {
    const [currentFrame, setCurrentFrame] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const totalImages = frames.length;
        const imageObjects = [];

        frames.forEach((frame) => {
            const img = new Image();
            img.src = frame.src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                }
            };
            img.onerror = () => {
                // Determine what to do on error. For now, count it as loaded to avoid blocking.
                loadedCount++;
                if (loadedCount === totalImages) {
                    setImagesLoaded(true);
                }
            };
            imageObjects.push(img);
        });
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;

        const durations = [800, 1500, 1500]; // Duration for each frame. Reduced for faster loading.

        if (currentFrame === frames.length - 1) {
            if (onComplete) {
                const timer = setTimeout(onComplete, durations[currentFrame]); // Use duration for final linger
                return () => clearTimeout(timer);
            }
            return;
        }

        const timer = setTimeout(() => {
            setCurrentFrame((prev) => prev + 1);
        }, durations[currentFrame]);

        return () => clearTimeout(timer);
    }, [onComplete, imagesLoaded, currentFrame]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#FFF8F0] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            {/* Floating Light Particles Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-[#C8D5B9] opacity-20"
                        style={{
                            width: Math.random() * 60 + 20,
                            height: Math.random() * 60 + 20,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5, // Slow, 5-10s duration
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="w-64 h-64 relative">
                {imagesLoaded && (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentFrame}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} // Smoother cross-fade
                            className="absolute inset-0 flex flex-col items-center"
                        >
                            {/* Subtle "Breathing" Motion for the Image */}
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w-full h-48"
                            >
                                <img
                                    src={frames[currentFrame].src}
                                    alt={frames[currentFrame].alt}
                                    className="w-full h-full object-contain drop-shadow-xl"
                                />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="mt-4 text-base font-medium text-[#5a6c7d] font-merriweather tracking-wide text-center px-4"
                            >
                                {frames[currentFrame].text}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>

            {/* Gentle progress indicator */}
            <div className="absolute bottom-12 flex space-x-4">
                {frames.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-1000 ease-in-out ${index <= currentFrame ? 'w-12 bg-[#C8D5B9]' : 'w-2 bg-[#E2E8F0]'
                            }`}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default LoadingSequence;
