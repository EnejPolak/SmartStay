import { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';
import { supabaseAdmin } from '../../_lib/supabase';

const UpdateReviewSchema = z.object({
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

    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Invalid review ID' });
    }

    if (req.method === 'GET') {
      const { data, error } = await supabaseAdmin
        .from('reviews')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          return res.status(404).json({ error: 'Review not found' });
        }
        console.error('Supabase error:', error);
        return res.status(500).json({ error: 'Failed to fetch review' });
      }

      return res.status(200).json({ review: data });

    } else if (req.method === 'PUT') {
      try {
        const validatedData = UpdateReviewSchema.parse(req.body);
        
        const { data, error } = await supabaseAdmin
          .from('reviews')
          .update(validatedData)
          .eq('id', id)
          .select()
          .single();

        if (error) {
          if (error.code === 'PGRST116') {
            return res.status(404).json({ error: 'Review not found' });
          }
          console.error('Supabase error:', error);
          return res.status(500).json({ error: 'Failed to update review' });
        }

        return res.status(200).json({ review: data });
      } catch (validationError) {
        if (validationError instanceof z.ZodError) {
          return res.status(400).json({
            error: 'Validation failed',
            details: validationError.issues,
          });
        }
        throw validationError;
      }

    } else if (req.method === 'DELETE') {
      const { error } = await supabaseAdmin
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Supabase error:', error);
        return res.status(500).json({ error: 'Failed to delete review' });
      }

      return res.status(200).json({ message: 'Review deleted successfully' });

    } else {
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
