import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  // Avoid throwing at import time in prod builds; log for visibility
  // eslint-disable-next-line no-console
  console.warn('[supabase] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
}

export const supabaseAdmin = createClient(SUPABASE_URL || '', SERVICE_ROLE_KEY || '');

export function getPublicUrl(path: string): string {
  const { data } = supabaseAdmin.storage.from('images').getPublicUrl(path);
  return data.publicUrl;
}


