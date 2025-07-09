import dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('SUPABASE_URL and SUPABASE_KEY must be set.')
}

const supabase = createClient(supabaseUrl, supabaseKey)
export { supabase };
