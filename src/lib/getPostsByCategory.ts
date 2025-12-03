import { wpClient } from './wpClient';
import { Post } from './getPosts';

interface PostsByCategoryResponse {
  category: {
    name: string;
    posts: {
      nodes: Post[];
    };
  } | null;
}

const GET_POSTS_BY_CATEGORY_QUERY = `
  query PostsByCategory($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      name
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
  }
`;

export interface CategoryPostsResult {
  categoryName: string;
  posts: Post[];
}

export async function getPostsByCategory(slug: string): Promise<CategoryPostsResult | null> {
  try {
    const data = await wpClient.request<PostsByCategoryResponse>(GET_POSTS_BY_CATEGORY_QUERY, {
      slug,
    });
    
    if (!data.category) {
      return null;
    }

    return {
      categoryName: data.category.name,
      posts: data.category.posts.nodes,
    };
  } catch (error) {
    console.error(`Error fetching posts for category "${slug}":`, error);
    return null;
  }
}

