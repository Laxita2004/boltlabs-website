import { supabase } from "../config/supabaseClient.js";

// Fetch all domains
export const fetchDomains = async (req, res) => {
  const { data, error } = await supabase
    .from("domains")
    .select("*")
    .order("created_at", { ascending: false });

  error ? res.status(500).json({ error }) : res.json(data);
};

// Create new domain
export const createDomain = async (req, res) => {
  const { name, description } = req.body;

  const { data, error } = await supabase
    .from("domains")
    .insert([{ name, description }])
    .select();

  error ? res.status(400).json({ error }) : res.status(201).json(data[0]);
};

// Delete domain
export const deleteDomain = async (req, res) => {
  const { error } = await supabase
    .from("domains")
    .delete()
    .eq("id", req.params.id);

  error ? res.status(400).json({ error }) : res.json({ success: true });
};

// Fetch  members
// export const fetchMembers = async (req, res) => {
//   const { data, error } = await supabase
//     .from("users")
//     .select("id, email, name, role")
//     .eq("role", "staff");

//   error ? res.status(500).json({ error }) : res.json(data);
// };

 // Create  member
// export const createMember = async (req, res) => {
//   const { email, password, name } = req.body;

//   // Step 1: Create auth user
//   const { data: authData, error: authError } =
//     await supabase.auth.admin.createUser({
//       email,
//       password,
//       user_metadata: { name },
//       email_confirm: true,
//     });

//   if (authError) return res.status(400).json({ error: authError });

//   // Step 2: Update role in public.users
//   const { error } = await supabase
//     .from("users")
//     .update({ role: "staff" })
//     .eq("id", authData.user.id);

//   error ? res.status(400).json({ error }) : res.status(201).json(authData.user);
// };

// // Delete member
// export const deleteMember = async (req, res) => {
//   const { error } = await supabase.auth.admin.deleteUser(req.params.id);
//   error ? res.status(400).json({ error }) : res.json({ success: true });
// };

export const fetchMembers = async () => {
  const { data, error } = await supabase
    .from('Member')
    .select(`
      member_id,
      name,
      email,
      domains:MemberDomain(domain_id)
    `)
  return { data, error }
}

export const createMember = async (memberData) => {
  const { data, error } = await supabase.auth.admin.createUser({
    email: memberData.email,
    password: memberData.password,
    user_metadata: {
      name: memberData.name,
      role: 'member'
    },
    email_confirm: true
  })
  return { data, error }
}

export const deleteMember = async (member_id) => {
  const { error } = await supabase.auth.admin.deleteUser(member_id)
  return { error }
}

// Fetch all requests
export const fetchRequests = async (req, res) => {
  const { data, error } = await supabase.from("requests").select(`
      id,
      notes,
      status,
      response,
      created_at,
      client:users(name, email),
      service:services(name)
    `);

  error ? res.status(500).json({ error }) : res.json(data);
};

// Respond to request
export const respondToRequest = async (req, res) => {
  const { response_text, status } = req.body;

  const { data, error } = await supabase
    .from("requests")
    .update({ response: response_text, status })
    .eq("id", req.params.id)
    .select();

  error ? res.status(400).json({ error }) : res.json(data[0]);
};

// Fetch services 
export const fetchServices = async (req, res) => {
  let query = supabase
    .from("services")
    .select("id, name, status, created_at, domain:domains(name)");

  if (req.query.domain) query = query.eq("domain_id", req.query.domain);
  if (req.query.status) query = query.eq("status", req.query.status);

  const { data, error } = await query;
  error ? res.status(500).json({ error }) : res.json(data);
};
