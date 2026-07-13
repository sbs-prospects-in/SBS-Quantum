import PageWrapper from '../components/layout/PageWrapper';
import HeroGSAP from '../components/technologies/HeroGSAP';
import HorizontalAccordion from '../components/technologies/HorizontalAccordion';
import FloatingTerminals from '../components/technologies/FloatingTerminals';

export default function Technologies() {
  return (
    <PageWrapper>
      <main className="overflow-x-hidden w-full max-w-full bg-brand-bg dark:bg-[#020202] transition-colors duration-500">
        <HeroGSAP />
        <HorizontalAccordion />
        <FloatingTerminals />
      </main>
    </PageWrapper>
  );
}
