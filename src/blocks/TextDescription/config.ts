import type { Block } from 'payload'

export const TextDescriptionBlock: Block = {
  slug: 'textDescriptionBlock',
  interfaceName: 'TextDescriptionBlock',
  labels: {
    singular: 'Text Description Block',
    plural: 'Text Description Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
  ],
}
