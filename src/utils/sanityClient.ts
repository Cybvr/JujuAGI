import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'your-project-id',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2021-03-25', // use current date (YYYY-MM-DD) to target the latest API version
})