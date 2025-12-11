import React from 'react'

import { BackgroundBeamsWithCollisionDemo } from '../aceternity/background-beams-with-collision-demo'
import { AppleCardsCarouselDemo_01 } from '../aceternity/apple-cards-carousel-demo-01'
import { AppleCardsCarouselDemo_02 } from '../aceternity/apple-cards-carousel-demo-02'
// import { BackgroundLinesDemo } from '../aceternity/background-lines-demo'
import { CarouselDemo } from '../aceternity/carousel-demo'


import HeroSectionDemo_01 from '../aceternity/hero-section-demo-01'
import { LayoutTextFlipDemo } from '../aceternity/layout-text-flip-demo'

import { WorldMapDemo } from '../aceternity/world-map-demo'
import { GoogleGeminiEffectDemo } from '../aceternity/google-gemini-effect-demo'
import { ThreeDMarqueeDemo_01} from '../aceternity/3d-marquee-demo-01'
import { ThreeDMarqueeDemo_02} from '../aceternity/3d-marquee-demo-02'

import { AuroraBackgroundDemo } from '../aceternity/aurora-background-demo'
import { TypewriterEffectSmoothDemo } from '../aceternity/typewriter-effect-demo'
import { ImagesSliderDemo } from '../aceternity/images-slider-demo'
import { BackgroundRippleEffectDemo } from '../aceternity/background-ripple-effect-demo'




export default function HeroSection() {
  return (
    <div>
      <h1>HeroSection</h1>
      <AuroraBackgroundDemo />
      <TypewriterEffectSmoothDemo />
      <GoogleGeminiEffectDemo />
      <BackgroundBeamsWithCollisionDemo />
      <ImagesSliderDemo />
      <BackgroundRippleEffectDemo />
      
      <ThreeDMarqueeDemo_01 />
      <ThreeDMarqueeDemo_02 />

      <CarouselDemo />
      <AppleCardsCarouselDemo_01 />
      <AppleCardsCarouselDemo_02 />
      {/* <BackgroundLinesDemo /> */}

      <HeroSectionDemo_01 />
      <LayoutTextFlipDemo /> 
      <WorldMapDemo />

      
    </div>
  )
}