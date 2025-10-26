import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Brands from './components/Brands';
import AIAssistant from './components/AIAssistant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  return (
    <div className="bg-neutral-100 text-neutral-800 font-sans">
      <Header />
      <main>
        <Hero onOpenAiAssistant={() => setIsAiAssistantOpen(true)} />
        <Services />
        <About />
        <Brands />
        {/* AIAssistant is now a modal, removed from the main flow */}
        <Contact />
      </main>
      <Footer />
      <AIAssistant isOpen={isAiAssistantOpen} onClose={() => setIsAiAssistantOpen(false)} />
    </div>
  );
};

export default App;