import PageWrapper from '../components/layout/PageWrapper';
import AmbientHero from '../components/contact/AmbientHero';
import FluidBentoForm from '../components/contact/FluidBentoForm';
import CinematicLocations from '../components/contact/CinematicLocations';

export default function Contact() {
  return (
    <PageWrapper>
      <main className="overflow-x-hidden w-full max-w-full bg-brand-bg dark:bg-[#020202] transition-colors duration-500 selection:bg-brand-muted selection:text-white">
        
        {/* Serene Spatial Glassmorphism Hero */}
        <AmbientHero />

        {/* Fluid Shared-Layout Bento Grid */}
        <FluidBentoForm />

        {/* Cinematic Architectural Global Presence */}
        <CinematicLocations />

      </main>
    </PageWrapper>
  );
}
