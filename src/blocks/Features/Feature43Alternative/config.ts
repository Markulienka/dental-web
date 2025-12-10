import { Block } from 'payload'

export const Feature43AlternativeBlock: Block = {
  slug: 'feature43AlternativeBlock',
  labels: {
    singular: 'Feature 43 Alternative',
    plural: 'Features 43 Alternative',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'heading',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
