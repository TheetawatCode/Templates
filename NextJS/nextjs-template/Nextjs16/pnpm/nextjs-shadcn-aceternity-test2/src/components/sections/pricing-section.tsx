import React from 'react'

import { ThreeDCardDemo } from '../aceternity/3d-card-demo'
import { CardSpotlightDemo } from '../aceternity/card-spotlight-demo'
import { LensDemo_01 } from '../aceternity/lens-demo-01'
import { LensDemo_02 } from '../aceternity/lens-demo-02'

export default function PricingSection() {
  return (
    <div>
      <h1>PricingSection</h1>
      <ThreeDCardDemo />
      <CardSpotlightDemo />
      <LensDemo_01 />
      <LensDemo_02 />   
    </div>
  )
}