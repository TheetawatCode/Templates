import React from 'react'

import { FocusCardsDemo } from '../aceternity/focus-cards-demo'
import ExpandableCardDemo_01_grid from '../aceternity/expandable-card-demo-01-grid'
import ExpandableCardDemo_02_standard from '../aceternity/expandable-card-demo-02-standard'

export default function GallerySection() {
  return (
    <div>
        <h1>GallerySection</h1>
       <FocusCardsDemo />
       <ExpandableCardDemo_01_grid />
       <ExpandableCardDemo_02_standard />
    </div>
  )
}