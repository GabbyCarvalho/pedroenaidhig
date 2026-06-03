import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '232yc26e',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})