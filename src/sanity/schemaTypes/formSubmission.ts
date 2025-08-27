import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'formSubmission',
  title: 'Form Submissions',
  type: 'document',
  fields: [
    defineField({
      name: 'type',
      title: 'Form Type',
      type: 'string',
      options: {
        list: [
          { title: 'Contact Form', value: 'contact' },
          { title: 'Bulk Order Form', value: 'bulk-order' },
          { title: 'Newsletter Signup', value: 'newsletter' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity (for bulk orders)',
      type: 'number',
    }),
    defineField({
      name: 'productType',
      title: 'Product Type',
      type: 'string',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Responded', value: 'responded' },
          { title: 'Closed', value: 'closed' },
          { title: 'Spam', value: 'spam' },
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      description: 'IP address of the submitter for spam tracking',
    }),
    defineField({
      name: 'spamIndicators',
      title: 'Spam Indicators',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Detected spam indicators',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      rows: 3,
      description: 'Internal notes for tracking follow-up actions',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      type: 'type',
      date: 'submittedAt',
    },
    prepare(selection) {
      const { title, subtitle, type, date } = selection
      const formattedDate = date ? new Date(date).toLocaleDateString() : ''
      return {
        title: title || subtitle,
        subtitle: `${type} - ${formattedDate}`,
      }
    },
  },
  orderings: [
    {
      title: 'Submitted Date, New first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
    {
      title: 'Status',
      name: 'statusAsc',
      by: [{ field: 'status', direction: 'asc' }],
    },
  ],
})
