import type { Block } from 'payload'
import { link } from '@/fields/link'

export const CTAFooterBlock: Block = {
  slug: 'ctaFooterBlock',
  interfaceName: 'CTAFooterBlock',
  labels: {
    singular: 'CTA Footer Block',
    plural: 'CTA Footer Blocks',
  },
  fields: [
    {
      name: 'background',
      type: 'select',
      label: 'Background',
      defaultValue: 'muted',
      options: [
        { label: 'Muted', value: 'muted' },
        { label: 'Black', value: 'black' },
      ],
    },
    {
      name: 'title',
      type: 'textarea',
      label: 'Title',
      required: false,
    },
    link({
      overrides: {
        name: 'link',
        label: 'Button Link',
        required: true,
      },
    }),
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
    },
  ],
}
