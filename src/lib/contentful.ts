import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const fetchBlogPosts = async () => {
  const entries = await client.getEntries({
    content_type: 'title', // Update this to the correct content type ID
  });
  return entries.items;
}; 