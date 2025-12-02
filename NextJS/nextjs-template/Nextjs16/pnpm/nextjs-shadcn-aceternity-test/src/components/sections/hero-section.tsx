import React from 'react'

import HeroSectionOne from '../aceternity/hero-section-demo-1'
import { ImagesSliderDemo } from '../aceternity/images-slider-demo'

import { TypewriterEffectSmoothDemo } from '../aceternity/typewriter-effect-demo'
import { HeroScrollDemo } from '../aceternity/container-scroll-animation-demo'

import { CarouselDemo } from '../aceternity/carousel-demo'

import { ThreeDCardDemo } from '../aceternity/3d-card-demo'
import ExpandableCardDemo from '../aceternity/expandable-card-demo-grid'
import { FocusCardsDemo } from '../aceternity/focus-card-demo'
import { LayoutGridDemo } from '../aceternity/layout-grid-demo' 

import { AnimatedTestimonialsDemo } from '../aceternity/animated-testimonials-demo'
import { AnimatedTooltipPreview } from '../aceternity/animated-tooltip-demo'
import { InfiniteMovingCardsDemo } from '../aceternity/infinite-moving-cards-demo'


export default function HeroSection() {
  return (
    <div>
      <h1>Hero Section</h1> 

      <HeroSectionOne />
      <ImagesSliderDemo />
      
      <TypewriterEffectSmoothDemo />
      <HeroScrollDemo />

      <CarouselDemo />

      <ThreeDCardDemo />
      <ExpandableCardDemo />
      <FocusCardsDemo /> 
      <LayoutGridDemo /> 

      <AnimatedTestimonialsDemo /> 
      <AnimatedTooltipPreview />
      <InfiniteMovingCardsDemo /> 
    </div>
  )
}