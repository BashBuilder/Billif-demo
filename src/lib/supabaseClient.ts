import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://uxelxinfxqojrvpzbmis.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4ZWx4aW5meHFvanJ2cHpibWlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NTkyNDEsImV4cCI6MjA2NTEzNTI0MX0.L8xbQfwPOV5axoEYHVc71ygAzbWLwbI6_vGl3WJZZP8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
