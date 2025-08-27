import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
      initialValue: 'Explore Our Collection',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'string',
      initialValue: '/collection',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
    },
  },
})
