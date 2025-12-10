import { Block } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

export const LandingPageBlock: Block = {
  slug: 'landingPageBlock',
  labels: {
    singular: 'Landing Page Hero',
    plural: 'Landing Page Heros',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'video',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
