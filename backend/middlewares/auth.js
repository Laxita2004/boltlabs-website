import { supabase } from "../config/supabaseClient.js";

export const isAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  // Verify token and check role ..there is internal JWt in supabase...............
  const { data: { user }, error } = await supabase.auth.getUser(token);
  
  if (error || user?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  
  req.user = user;
  next();
};