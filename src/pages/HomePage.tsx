import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { BrandMarquee } from '../components/home/BrandMarquee';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { EngineeringServices } from '../components/home/EngineeringServices';
import { IndustrySolutions } from '../components/home/IndustrySolutions';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { LatestNews } from '../components/home/LatestNews';
import { Reveal } from '../components/common/Reveal';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <Reveal>
        <BrandMarquee />
      </Reveal>
      <Reveal>
        <CategoryGrid />
      </Reveal>
      <Reveal>
        <FeaturedProducts />
      </Reveal>
      <Reveal>
        <EngineeringServices />
      </Reveal>
      <Reveal>
        <IndustrySolutions />
      </Reveal>
      <Reveal>
        <WhyChooseUs />
      </Reveal>
      <Reveal>
        <LatestNews />
      </Reveal>
    </div>
  );
};
