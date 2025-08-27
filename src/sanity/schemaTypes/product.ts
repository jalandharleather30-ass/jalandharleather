import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Ladies Handbags', value: 'ladies-handbags' },
          { title: 'Premium Leather Purses', value: 'premium-purses' },
          { title: 'Ladies Leather Jackets', value: 'ladies-jackets' },
          { title: 'Customized Leather Accessories', value: 'custom-accessories' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
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
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'materials',
      title: 'Materials Used',
      type: 'string',
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Starting Price (Optional)',
      type: 'number',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Featured products will appear on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'isAvailable',
      title: 'Stock Status',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to control if this product is in stock or out of stock',
      options: {
        layout: 'checkbox',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stockQuantity',
      title: 'Stock Quantity',
      type: 'number',
      description: 'Current stock quantity (optional - for internal tracking)',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'care',
      title: 'Care Instructions',
      type: 'text',
      description: 'Instructions for caring and maintaining the product',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Primary color of the product',
    }),
    defineField({
      name: 'weight',
      title: 'Weight',
      type: 'string',
      description: 'Weight of the product (e.g., 800g)',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0',
      category: 'category',
    },
    prepare(selection) {
      const { title, media, category } = selection
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
})
