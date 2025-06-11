// controllers/domainController.js
import { supabase } from '../config/supabaseClient.js'; // your Supabase client

export const getAllDomains = async (req, res) => {
  const { data, error } = await supabase
    .from('domains')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching domains:', error.message);
    return res.status(500).json({ message: 'Failed to fetch domains' });
  }

  res.status(200).json(data);
};


