import type { Block } from 'payload'
import { link } from '@/fields/link'

export const Pricing34Block: Block = {
  slug: 'pricing34Block',
  interfaceName: 'Pricing34Block',
  labels: {
    singular: 'Pricing34 Block',
    plural: 'Pricing34 Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'backgroundMuted',
      type: 'checkbox',
      label: 'Gray Background',
      defaultValue: true,
    },
    {
      name: 'centerAlign',
      type: 'checkbox',
      label: 'Center Align Title & Description',
      defaultValue: true,
    },
    {
      name: 'card',
      type: 'array',
      label: 'Pricing Cards',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Plan Name',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Card Description',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Feature Text',
              required: true,
            },
            {
              name: 'bold',
              type: 'checkbox',
              label: 'Make Bold',
            },
          ],
        },
        link({
          overrides: {
            name: 'linkCard',
            label: 'Button Link',
          },
        }),
        {
          name: 'highlighted',
          type: 'checkbox',
          label: 'Highlighted (Primary Plan)',
        },
      ],
    },
  ],
}
