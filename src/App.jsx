import { useState } from 'react';
import LenisScroll from './components/LenisScroll';
import Navbar from './components/Navbar';
import HeroSignal from './components/HeroSignal';
import GrowthFitAssessment from './components/GrowthFitAssessment';
import ServicesBento from './components/ServicesBento';
import ProcessSection from './components/ProcessSection';
import CaseStudies from './components/CaseStudies';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assessmentData, setAssessmentData] = useState(null);

  const handleOpenAssessment = (data = null) => {
    if (data) {
      setAssessmentData(data);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-obsidian text-zinc-300 font-sans antialiased selection:bg-pulse selection:text-white flex flex-col">
      {/* Smooth Scroll with prefers-reduced-motion protection */}
      <LenisScroll />

      {/* Semantic Header & Nav */}
      <Navbar onOpenAssessment={() => handleOpenAssessment()} />

      {/* Semantic Main Content Area */}
      <main className="flex-1">
        <HeroSignal onOpenAssessment={() => handleOpenAssessment()} />
        <GrowthFitAssessment onSelectAction={(data) => handleOpenAssessment(data)} />
        <ServicesBento onOpenAssessment={() => handleOpenAssessment()} />
        <ProcessSection onOpenAssessment={() => handleOpenAssessment()} />
        <CaseStudies onOpenAssessment={() => handleOpenAssessment()} />
        <InstagramFeed />
      </main>

      {/* Semantic Footer */}
      <Footer onOpenAssessment={() => handleOpenAssessment()} />

      {/* Interactive Strategy / Blueprint Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        assessmentData={assessmentData}
      />
    </div>
  );
}
