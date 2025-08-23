// src/pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false, autoRefreshToken: false } }
);

function isLocal(req: NextApiRequest): boolean {
  const host = req.headers.host || '';
  return host.includes('localhost') || host.includes('127.0.0.1') || host.includes('0.0.0.0');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // For local development, allow some debug logging
    if (isLocal(req)) {
      console.log(`[auth/login] Login attempt for ${email}`);
    }

    const { data: { user }, error } = await supabaseAdmin.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password: password,
    });

    if (error || !user) {
      if (isLocal(req)) {
        console.log(`[auth/login] Login failed for ${email}:`, error?.message);
      }
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check if user has admin role (you can customize this logic)
    const { data: profile } = await supabaseAdmin
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single();

    // For now, allow any authenticated user to access admin
    // You can add role-based checks here later
    if (!profile) {
      // Create a default profile if none exists
      await supabaseAdmin
        .from('profiles')
        .insert([{ id: user.id, role: 'admin' }])
        .single();
    }

    if (isLocal(req)) {
      console.log(`[auth/login] Login successful for ${email}`);
    }

    const token = jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '7d' });

    res.setHeader('Set-Cookie', `auth-token=${token}; Path=/; HttpOnly; SameSite=Lax; ${
      process.env.NODE_ENV === 'production' ? 'Secure;' : ''
    } Max-Age=${7 * 24 * 60 * 60}`);

    return res.status(200).json({ 
      message: 'Login successful',
      user: { id: user.id, email: user.email }
    });

  } catch (error) {
    console.error('[auth/login] Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
