import { useParams, Navigate } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import { servicesData } from '../data/servicesData';

// Import Heroes
import HeroTerminal from '../components/services/heroes/HeroTerminal';
import HeroSplit from '../components/services/heroes/HeroSplit';
import HeroRings from '../components/services/heroes/HeroRings';

// Import Layouts
import LayoutBrutalist from '../components/services/layouts/LayoutBrutalist';
import LayoutMinimal from '../components/services/layouts/LayoutMinimal';
import LayoutTimeline from '../components/services/layouts/LayoutTimeline';

const HERO_MAP = {
  terminal: HeroTerminal,
  split: HeroSplit,
  rings: HeroRings,
};

const LAYOUT_MAP = {
  brutalist: LayoutBrutalist,
  minimal: LayoutMinimal,
  timeline: LayoutTimeline,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Fallback to rings/brutalist if metadata is somehow missing
  const HeroComponent = HERO_MAP[service.heroType] || HeroRings;
  const LayoutComponent = LAYOUT_MAP[service.layoutStyle] || LayoutBrutalist;

  return (
    <PageWrapper>
      <HeroComponent title={service.title} description={service.description} />
      <LayoutComponent service={service} />
    </PageWrapper>
  );
}
