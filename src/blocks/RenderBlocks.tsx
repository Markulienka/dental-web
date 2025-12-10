import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { LandingPageBlock } from './Heros/LandingPage/Component'
import { Feature43Block } from './Features/Feature43/Component'
import { Feature43AlternativeBlock } from './Features/Feature43Alternative/Component'
import { Feature16Block } from './Features/Feature16/Component'
import { Pricing34Block } from './Pricings/Pricing34/Component'
import { Pricing30Block } from './Pricings/Pricing30/Component'
import { TextDescriptionBlock } from './TextDescription/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  landingPageBlock: LandingPageBlock,
  feature43Block: Feature43Block,
  feature43AlternativeBlock: Feature43AlternativeBlock,
  feature16Block: Feature16Block,
  pricing34Block: Pricing34Block,
  pricing30Block: Pricing30Block,
  textDescriptionBlock: TextDescriptionBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout']
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="" key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
