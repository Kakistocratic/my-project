import type { CollectionConfig } from 'payload'

import { publicAccess } from '../access/publicAccess'
import { adminOnly } from '../access/adminOnly'

export const ContactInfo: CollectionConfig = {
  slug: 'contact-info',
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: publicAccess,
    update: adminOnly,
  },
  admin: {
    useAsTitle: 'phoneNumber',
    defaultColumns: ['phoneNumber', 'email', 'city'],
    description: 'Manage contact information for the coffee shop',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: false,
      defaultValue: 'Contact',
      admin: {
        description: 'The heading to display above contact info (e.g., "Contact", "Kontakt")',
        position: 'sidebar',
      },
    },
    {
      name: 'phoneNumber',
      type: 'text',
      required: false,
      admin: {
        placeholder: '+47 123 45 678',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: false,
    },
    {
      name: 'facebookUrl',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'https://facebook.com/your-page',
      },
    },
    {
      name: 'instagramUrl',
      type: 'text',
      required: false,
      admin: {
        placeholder: 'https://instagram.com/your-account',
      },
    },
    {
      name: 'streetAddress',
      type: 'text',
      required: false,
    },
    {
      name: 'city',
      type: 'text',
      required: false,
    },
    {
      name: 'postalCode',
      type: 'text',
      required: false,
    },
  ],
}
