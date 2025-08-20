// src/lib/supabaseBrowser.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Helpful runtime checks so you don't chase "supabaseUrl is required" later
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL is not set");
}
if (!key) {
  throw new Error("NEXT_PUBLIC_SUPABASE_ANON_KEY is not set");
}

/**
 * Browser-side client (RLS applies).
 * We don't persist sessions because we only do public reads here.
 */
export const supabaseBrowser: SupabaseClient = createClient(url, key, {
  auth: { persistSession: false },
});
