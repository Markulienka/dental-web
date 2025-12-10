import type { Block } from 'payload'

export const Feature16Block: Block = {
  slug: 'feature16Block',
  interfaceName: 'Feature16Block',
  labels: {
    singular: 'Feature16 Block',
    plural: 'Feature16 Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features',
      fields: [
        {
          name: 'doctorName',
          type: 'text',
          label: 'Doctor Name',
          required: true,
        },
        {
          name: 'clinicName',
          type: 'text',
          label: 'Clinic Name',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'items',
          type: 'group',
          label: 'Items',
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Icon',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
