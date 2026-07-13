import PageWrapper from '../components/layout/PageWrapper';
import MagneticHero from '../components/career/MagneticHero';
import ExpandableJobGrid from '../components/career/ExpandableJobGrid';
import DraggableProcess from '../components/career/DraggableProcess';

export default function Career() {
  return (
    <PageWrapper>
      <main className="overflow-x-hidden w-full max-w-full bg-brand-bg dark:bg-[#050505] text-brand-text dark:text-white selection:bg-brand-text selection:text-white dark:selection:text-[#050505]">
        
        {/* Physics-Based Typography Playground */}
        <MagneticHero />
        
        {/* Shared Layout Expansion Grid */}
        <ExpandableJobGrid />

        {/* Drag & Throw Physics Carousel */}
        <DraggableProcess />

      </main>
    </PageWrapper>
  );
}
