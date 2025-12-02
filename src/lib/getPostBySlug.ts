import { wpClient } from './wpClient';

export interface Post {
  title: string;
  content: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

interface PostResponse {
  post: Post | null;
}

const GET_POST_BY_SLUG_QUERY = `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const data = await wpClient.request<PostResponse>(GET_POST_BY_SLUG_QUERY, {
      slug,
    });
    return data.post;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}

