import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Jalandhar Leather',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Where Craft Meets Class',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 4,
      initialValue: 'Since 2018, Jalandhar Leather has been crafting high-quality leather goods that blend timeless elegance with modern design. Based in Jalandhar, we specialize in creating products that reflect skilled craftsmanship and premium material selection, ensuring durability and style for our customers across India and beyond.',
    }),
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          initialValue: '+919004672562',
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          initialValue: 'jalandharleather30@gmail.com',
        },
        {
          name: 'address',
          title: 'Physical Address',
          type: 'text',
          rows: 2,
          initialValue: 'Kapurthala Road, 1 & 3, Leather Complex Rd, Jalandhar, Punjab 144021, India',
        },
      ],
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'usps',
      title: 'Unique Selling Points',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'USP Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'USP Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'icon',
              title: 'Icon (Heroicon name)',
              type: 'string',
              description: 'Enter a Heroicons name (e.g., "HandThumbUpIcon", "SparklesIcon")',
            },
          ],
        },
      ],
      initialValue: [
        {
          title: '100% Handmade Excellence',
          description: 'Every piece is carefully crafted by skilled artisans with attention to detail.',
          icon: 'HandThumbUpIcon',
        },
        {
          title: 'Premium & Sustainable Leather',
          description: 'We use only the finest quality leather that ages beautifully over time.',
          icon: 'ShieldCheckIcon',
        },
        {
          title: 'Attention to Detail in Every Stitch',
          description: 'Precision craftsmanship ensures durability and elegant finishing.',
          icon: 'SparklesIcon',
        },
        {
          title: 'Bulk Production & Custom Designs',
          description: 'We cater to both individual customers and bulk orders with custom designs.',
          icon: 'CubeIcon',
        },
      ],
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Primary contact phone number',
    }),
    defineField({
      name: 'founder',
      title: 'Founder Information',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Founder Name',
          type: 'string',
        },
        {
          name: 'title',
          title: 'Founder Title',
          type: 'string',
        },
        {
          name: 'bio',
          title: 'Founder Bio',
          type: 'text',
          rows: 4,
        },
      ],
    }),
    defineField({
      name: 'companyInfo',
      title: 'Company Information',
      type: 'object',
      fields: [
        {
          name: 'established',
          title: 'Established Year',
          type: 'string',
        },
        {
          name: 'specialization',
          title: 'Specialization',
          type: 'string',
        },
        {
          name: 'mission',
          title: 'Mission Statement',
          type: 'text',
          rows: 3,
        },
        {
          name: 'vision',
          title: 'Vision Statement', 
          type: 'text',
          rows: 3,
        },
      ],
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
        {
          name: 'ogImage',
          title: 'Social Media Image',
          type: 'image',
          description: 'Image for social media sharing (Facebook, Twitter, etc.)',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
