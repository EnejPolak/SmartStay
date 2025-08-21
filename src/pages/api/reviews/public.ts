import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseAdmin } from '../_lib/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }

  try {
    // Fetch only visible reviews, ordered by rating (highest first), then by name
    const { data, error } = await supabaseAdmin
      .from('reviews')
      .select('*')
      .eq('status', 'visible')
      .order('rating', { ascending: false })
      .order('name', { ascending: true });

    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Failed to fetch reviews' });
    }

    return res.status(200).json({ reviews: data || [] });
  } catch (error) {
    console.error('API error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
