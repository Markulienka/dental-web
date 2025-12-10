import type { Block } from 'payload'

export const Pricing30Block: Block = {
  slug: 'pricing30Block',
  interfaceName: 'Pricing30Block',
  labels: {
    singular: 'Pricing30 Block',
    plural: 'Pricing30 Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'featuresLabel',
      type: 'text',
      label: 'Features Label',
      required: true,
      defaultValue: 'Features',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Features (Global)',
      minRows: 1,
      admin: {
        description: 'Define all features once. Each plan will set values for these features.',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Feature Name',
          required: true,
        },
      ],
    },
    {
      name: 'plans',
      type: 'array',
      label: 'Pricing Plans',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Plan Name',
          required: true,
        },
        {
          name: 'isHighlighted',
          type: 'checkbox',
          label: 'Highlight this plan',
          defaultValue: false,
        },
        {
          name: 'featureValues',
          type: 'array',
          label: 'Feature Values',
          admin: {
            description:
              'Set values for each feature defined above. Must match the number of features.',
          },
          fields: [
            {
              name: 'valueType',
              type: 'select',
              label: 'Value Type',
              required: true,
              defaultValue: 'boolean',
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Boolean (Check/Cross)', value: 'boolean' },
              ],
            },
            {
              name: 'textValue',
              type: 'text',
              label: 'Text Value',
              admin: {
                condition: (data, siblingData) => siblingData?.valueType === 'text',
              },
            },
            {
              name: 'booleanValue',
              type: 'checkbox',
              label: 'Enabled',
              admin: {
                condition: (data, siblingData) => siblingData?.valueType === 'boolean',
              },
            },
          ],
        },
      ],
    },
  ],
}
