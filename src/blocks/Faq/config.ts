import type { Block } from 'payload'

export const Faq9Block: Block = {
  slug: 'faq9Block',
  interfaceName: 'Faq9Block',
  labels: {
    singular: 'FAQ Block',
    plural: 'FAQ Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: false,
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'FAQs',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          required: true,
        },
      ],
    },
  ],
}
