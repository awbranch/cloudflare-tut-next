import { createClient, groq } from 'next-sanity';

export const sanityClient = createClient({
    projectId: 'ey2x3g8q',
    dataset: 'production',
    apiVersion: '2024-05-06',
    useCdn: false,
  });
  