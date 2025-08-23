import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { supabaseAdmin } from '../../_lib/supabase';

const CreateReviewSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters').max(60, 'Name must be at most 60 characters'),
  surname: z.string().trim().min(2, 'Surname must be at least 2 characters').max(60, 'Surname must be at most 60 characters'),
  profile_picture: z.string().url('Must be a valid URL').optional().nullable(),
  company: z.string().trim().min(2, 'Company must be at least 2 characters').max(100, 'Company must be at most 100 characters'),
  rating: z.number().int().min(0, 'Rating must be at least 0').max(5, 'Rating must be at most 5'),
  description: z.string().trim().min(10, 'Description must be at least 10 characters').max(1000, 'Description must be at most 1000 characters'),
  status: z.enum(['visible', 'hidden']).default('visible'),
});

// Simple auth check - you can adapt this to your existing auth system
async function checkAdminAuth(_req: NextApiRequest): Promise<boolean> {
  // TODO: Implement your admin auth check here
  // For now, returning true - replace with actual auth logic
  return true;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Check admin authentication
    const isAdmin = await checkAdminAuth(req);
    if (!isAdmin) {
      return res.status(403).json({ error: 'Forbidden: Admin access required' });
    }

    if (req.method === 'GET') {
      const { q = '', page = '1', limit = '10', sort = 'name', order = 'asc', status = 'all' } = req.query;
      
      const offset = (parseInt(page as string) - 1) * parseInt(limit as string);
      const searchTerm = `%${q}%`;
      
      // Validate sort and order parameters
      const validSorts = ['name', 'rating', 'company', 'status'];
      const validOrders = ['asc', 'desc'];
      const sortColumn = validSorts.includes(sort as string) ? sort : 'name';
      const sortOrder = validOrders.includes(order as string) ? order : 'asc';

      // Build the query
      let query = supabaseAdmin
        .from('reviews')
        .select('*', { count: 'exact' });

      // Add search filter
      if (q) {
        query = query.or(`name.ilike.${searchTerm},surname.ilike.${searchTerm},company.ilike.${searchTerm}`);
      }

      // Add status filter
      if (status && status !== 'all') {
        query = query.eq('status', status);
      }

      // Add sorting
      query = query.order(sortColumn as string, { ascending: sortOrder === 'asc' });

      // Add pagination
      query = query.range(offset, offset + parseInt(limit as string) - 1);

      const { data, error, count } = await query;

      if (error) {
        console.error('Supabase error:', error);
        return res.status(500).json({ error: 'Failed to fetch reviews' });
      }

      return res.status(200).json({
        reviews: data || [],
        total: count || 0,
        page: parseInt(page as string),
        limit: parseInt(limit as string),
        totalPages: Math.ceil((count || 0) / parseInt(limit as string))
      });

    } else if (req.method === 'POST') {
      try {
        const validatedData = CreateReviewSchema.parse(req.body);
        
        const { data, error } = await supabaseAdmin
          .from('reviews')
          .insert([validatedData])
          .select()
          .single();

        if (error) {
          console.error('Supabase error:', error);
          return res.status(500).json({ error: 'Failed to create review' });
        }

        return res.status(201).json({ review: data });
      } catch (validationError) {
        if (validationError instanceof z.ZodError) {
          return res.status(400).json({
            error: 'Validation failed',
            details: validationError.issues,
          });
        }
        throw validationError;
      }
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
