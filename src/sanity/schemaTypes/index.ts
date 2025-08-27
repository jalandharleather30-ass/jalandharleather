import { type SchemaTypeDefinition } from 'sanity'

import product from './product'
import siteSettings from './siteSettings'
import heroSection from './heroSection'
import formSubmission from './formSubmission'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, siteSettings, heroSection, formSubmission],
}
