import { supabase } from '../config/supabaseClient.js';


// Get all profile data from Supabase
export const  getProfile = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('profile')
      .select('*');

    if (error) throw error;

    res.json(data);
  } catch (error) {
    console.error('Error fetching profile data from Supabase:', error);
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
};


