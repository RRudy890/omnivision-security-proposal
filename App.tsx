
import React, { useState, useCallback, useEffect } from 'react';
import { SlideId } from './types';
import TitleSlide from './components/slides/TitleSlide';
import FoundationSlide from './components/slides/FoundationSlide';
import PillarsSlide from './components/slides/PillarsSlide';
import InfrastructureSlide from './components/slides/InfrastructureSlide';
import ProcessSlide from './components/slides/ProcessSlide';
import ServicesSlide from './components/slides/ServicesSlide';
import CommercialsSlide from './components/slides/CommercialsSlide';
import ConclusionSlide from './components/slides/ConclusionSlide';
import { SlideWrapper } from './components/SlideWrapper';

const SLIDE_ORDER: SlideId[] = [
  SlideId.TITLE,
  SlideId.FOUNDATION,
  SlideId.PILLARS,
  SlideId.INFRASTRUCTURE,
  SlideId.PROCESS,
  SlideId.SERVICES,
  SlideId.COMMERCIALS,
  SlideId.CONCLUSION
];

const App: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlideIndex((prev) => (prev + 1) % SLIDE_ORDER.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlideIndex((prev) => (prev - 1 + SLIDE_ORDER.length) % SLIDE_ORDER.length);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === 'Space' || event.key === 'PageDown') {
        nextSlide();
      } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        prevSlide();
      } else if (event.key === 'p' && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        handlePrint();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const currentSlideId = SLIDE_ORDER[activeSlideIndex];

  const renderSlide = () => {
    switch (currentSlideId) {
      case SlideId.TITLE: return <TitleSlide onNext={nextSlide} onPrev={prevSlide} />;
      case SlideId.FOUNDATION: return <FoundationSlide onNext={nextSlide} onPrev={prevSlide} />;
      case SlideId.PILLARS: return <PillarsSlide onNext={nextSlide} onPrev={prevSlide} />;
      case SlideId.INFRASTRUCTURE: return <InfrastructureSlide onNext={nextSlide} onPrev={prevSlide} />;
      case SlideId.PROCESS: return <ProcessSlide onNext={nextSlide} onPrev={prevSlide} />;
      case SlideId.SERVICES: return <ServicesSlide onNext={nextSlide} onPrev={prevSlide} />;
      case SlideId.COMMERCIALS: return <CommercialsSlide onNext={nextSlide} onPrev={prevSlide} />;
      case SlideId.CONCLUSION: return <ConclusionSlide onNext={nextSlide} onPrev={prevSlide} />;
      default: return <TitleSlide onNext={nextSlide} onPrev={prevSlide} />;
    }
  };

  return (
    <div className="bg-black min-h-screen selection:bg-midnight-yellow selection:text-black">
      <SlideWrapper>
        {renderSlide()}
        
        {/* Persistent Global Navigation */}
        <div className="fixed bottom-8 right-8 z-50 flex items-center space-x-1 no-print">
          <button 
            onClick={handlePrint}
            className="w-12 h-12 bg-midnight-black border border-white/20 flex items-center justify-center hover:bg-midnight-yellow group transition-colors mr-1"
            title="Export to PDF (Ctrl+P)"
          >
            <span className="material-icons text-white/50 group-hover:text-black text-sm">picture_as_pdf</span>
          </button>

          <button 
            onClick={toggleFullScreen}
            className="w-12 h-12 bg-midnight-black border border-white/20 flex items-center justify-center hover:bg-midnight-yellow group transition-colors mr-4"
            title="Toggle Full Screen"
          >
            <span className="material-icons text-white/50 group-hover:text-black text-sm">fullscreen</span>
          </button>
          
          <button 
            onClick={prevSlide}
            className="w-12 h-12 bg-midnight-black border border-white/20 flex items-center justify-center hover:bg-midnight-yellow group transition-colors"
            title="Previous Slide (Left Arrow)"
          >
            <span className="material-icons text-white group-hover:text-black">chevron_left</span>
          </button>
          
          <div className="flex items-center justify-center px-4 h-12 bg-midnight-black/50 border-y border-white/20 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] min-w-[80px]">
            {activeSlideIndex + 1} / {SLIDE_ORDER.length}
          </div>
          
          <button 
            onClick={nextSlide}
            className="w-12 h-12 bg-midnight-black border border-white/20 flex items-center justify-center hover:bg-midnight-yellow group transition-colors"
            title="Next Slide (Right Arrow / Space)"
          >
            <span className="material-icons text-white group-hover:text-black">chevron_right</span>
          </button>
        </div>

        <div className="fixed bottom-24 right-8 text-[9px] text-white/20 uppercase font-bold tracking-widest animate-pulse pointer-events-none no-print">
          Use Arrows to Navigate
        </div>
      </SlideWrapper>
    </div>
  );
};

export default App;
