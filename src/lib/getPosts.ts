import { wpClient } from './wpClient';

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
    };
  };
}

interface PostsResponse {
  posts: {
    nodes: Post[];
  };
}

const GET_ALL_POSTS_QUERY = `
  query GetAllPosts {
    posts {
      nodes {
        id
        slug
        title
        excerpt
        content
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export async function getPosts(): Promise<Post[]> {
  try {
    const data = await wpClient.request<PostsResponse>(GET_ALL_POSTS_QUERY);
    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw new Error('Failed to fetch posts from WordPress');
  }
}

