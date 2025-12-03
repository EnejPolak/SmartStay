import { wpClient } from './wpClient';

export interface Category {
  id: string;
  name: string;
  slug: string;
}

interface CategoriesResponse {
  categories: {
    nodes: Category[];
  };
}

const GET_CATEGORIES_QUERY = `
  query GetCategories {
    categories {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

export async function getCategories(): Promise<Category[]> {
  try {
    const data = await wpClient.request<CategoriesResponse>(GET_CATEGORIES_QUERY);
    return data.categories.nodes;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories from WordPress');
  }
}

