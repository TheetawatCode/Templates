import React from 'react'


import FeaturesSectionDemo_01 from '../aceternity/features-section-demo-01'
import FeaturesSectionDemo_02 from '../aceternity/features-section-demo-02'
import FeaturesSectionDemo_03 from '../aceternity/features-section-demo-03'
import { PointerHighlightDemo_01 } from '../aceternity/pointer-highlight-demo-01'
import { PointerHighlightDemo_02 } from '../aceternity/pointer-highlight-demo-02'
import { BentoGridDemo_01 } from '../aceternity/bento-grid-demo-01'
import { BentoGridDemo_02 } from '../aceternity/bento-grid-demo-02'
import { BentoGridDemo_03 } from '../aceternity/bento-grid-demo-03'

export default function FeaturesSection() {
  return (
    <div>
      <h1>FeaturesSection</h1>
      <FeaturesSectionDemo_01 />
      <FeaturesSectionDemo_02 />
      <FeaturesSectionDemo_03 />
      <PointerHighlightDemo_01 />
      <PointerHighlightDemo_02 />
      <BentoGridDemo_01 />
      <BentoGridDemo_02 />
      <BentoGridDemo_03 />
    </div >

  )
}