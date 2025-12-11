import React from 'react'

import { EncryptedTextDemo_01 } from '../aceternity/encrypted-text-demo-01'
import { EncryptedTextDemo_02 } from '../aceternity/encrypted-text-demo-02'
import { AnimatedTooltipPreview } from '../aceternity/animated-tooltip-demo'

export default function AboutSection() {
  return (
    <div>
      <h1>AboutSection</h1>
      <EncryptedTextDemo_01 />
      <EncryptedTextDemo_02 /> 
      <AnimatedTooltipPreview />
    </div>
  )
}