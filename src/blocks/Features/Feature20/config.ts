import type { Block, Field } from 'payload'
import { link } from '@/fields/link'

const clinicFields: Field[] = [
  {
    name: 'image',
    type: 'upload',
    label: 'Image',
    relationTo: 'media',
    required: true,
  },
  {
    name: 'clinicName',
    type: 'text',
    label: 'Clinic Name',
    required: true,
  },
  {
    name: 'location',
    type: 'text',
    label: 'Location',
    required: true,
  },
  {
    name: 'tags',
    type: 'array',
    label: 'Services/Tags',
    minRows: 1,
    maxRows: 3,
    fields: [
      {
        name: 'tag',
        type: 'text',
        required: true,
      },
    ],
  },
  link({
    overrides: {
      name: 'link',
      label: 'Button Link',
      required: true,
    },
  }),
]

export const Feature20Block: Block = {
  slug: 'feature20Block',
  interfaceName: 'Feature20Block',
  labels: {
    singular: 'Feature 20 Block',
    plural: 'Feature 20 Blocks',
  },
  fields: [
    {
      name: 'clinics',
      type: 'array',
      label: 'Clinics',
      minRows: 1,
      fields: clinicFields,
    }
  ],
}