import React from 'react'

import { ThreeDCardDemo } from '../aceternity/3d-card-demo'
import { EncryptedTextDemo_01 } from '../aceternity/encrypted-text-demo-01'
import { EncryptedTextDemo_02 } from '../aceternity/encrypted-text-demo-02'
import { AnimatedTestimonialsDemo } from '../aceternity/animated-testimonials-demo'
import { AppleCardsCarouselDemo_01 } from '../aceternity/apple-cards-carousel-demo-01'
import { AppleCardsCarouselDemo_02 } from '../aceternity/apple-cards-carousel-demo-02'
import { BackgroundBeamsWithCollisionDemo } from '../aceternity/background-beams-with-collision-demo'
// import { BackgroundLinesDemo } from '../aceternity/background-lines-demo'
import { CardSpotlightDemo } from '../aceternity/card-spotlight-demo'
import { CarouselDemo } from '../aceternity/carousel-demo'
import FeaturesSectionDemo_01 from '../aceternity/features-section-demo-01'
import FeaturesSectionDemo_02 from '../aceternity/features-section-demo-02'
import FeaturesSectionDemo_03 from '../aceternity/features-section-demo-03'
import { FloatingDockDemo } from '../aceternity/floating-dock-demo'
import { FocusCardsDemo } from '../aceternity/focus-cards-demo'
import HeroSectionDemo_01 from '../aceternity/hero-section-demo-01'
import { LayoutTextFlipDemo } from '../aceternity/layout-text-flip-demo'
import { LensDemo_01 } from '../aceternity/lens-demo-01'
import { LensDemo_02 } from '../aceternity/lens-demo-02'

export default function HeroSection() {
  return (
    <div>
      <h1>HeroSection</h1>
      <ThreeDCardDemo />
      <EncryptedTextDemo_01 />
      <EncryptedTextDemo_02 /> 
      <AnimatedTestimonialsDemo />
      <AppleCardsCarouselDemo_01 />
      <AppleCardsCarouselDemo_02 />
      <BackgroundBeamsWithCollisionDemo />
      {/* <BackgroundLinesDemo /> */}
      <CardSpotlightDemo />
      <CarouselDemo />
      <FeaturesSectionDemo_01 />
      <FeaturesSectionDemo_02 />
      <FeaturesSectionDemo_03 />
      <FloatingDockDemo />
      <FocusCardsDemo />
      <HeroSectionDemo_01 />
      <LayoutTextFlipDemo /> 
      <LensDemo_01 />
      <LensDemo_02 />
    </div>
  )
}