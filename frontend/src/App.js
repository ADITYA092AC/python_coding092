import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HowItWorksSection from "./components/HowItWorksSection";
import OfferingsSection from "./components/OfferingsSection";
import AISection from "./components/AISection";
import BenefitsSection from "./components/BenefitsSection";
import ResearchSection from "./components/ResearchSection";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import LoadingSequence from "./components/ui/LoadingSequence";
import { AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate initial fast load, but keep at least one cycle of animation for the first visit
  // Or just let the component handle its own completion timing

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingSequence onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="App animate-in fade-in duration-1000">
          <Navigation />
          <HeroSection />
          <AboutSection />
          <HowItWorksSection />
          <OfferingsSection />
          <AISection />
          <BenefitsSection />
          <ResearchSection />
          <NewsSection />
          <ContactSection />
          <Footer />
          <Toaster />
        </div>
      )}
    </>
  );
}

export default App;
