import supabase from '../supabaseClient.js';

// Get all team members by domain
export const getDomainMembers = async (req, res) => {
  try {
    const { domain } = req.params;

    const { data: members, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('domain', domain);

    if (error) {
      throw error;
    }

    if (!members || members.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No team members found for this domain'
      });
    }

    res.status(200).json({
      success: true,
      count: members.length,
      data: members
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Get single team member by ID within a domain
export const getMemberProfile = async (req, res) => {
  try {
    const { domain, memberId } = req.params;

    const { data: member, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('domain', domain)
      .eq('id', parseInt(memberId))
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({
          success: false,
          message: 'Member not found in the specified domain'
        });
      }
      throw error;
    }

    res.status(200).json({
      success: true,
      data: member
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Create a new team member
export const createTeamMember = async (req, res) => {
  try {
    const {
      name,
      role,
      expertise,
      avatar,
      projects,
      github,
      linkedin,
      bio,
      domain
    } = req.body;

    if (!domain) {
      return res.status(400).json({
        success: false,
        message: 'Domain is required'
      });
    }

    const { data: newMember, error } = await supabase
      .from('team_members')
      .insert([{
        name,
        role,
        expertise,  // should be an array
        avatar,
        projects,
        github,
        linkedin,
        bio,
        domain
      }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json({
      success: true,
      data: newMember
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Insert failed',
      error: error.message
    });
  }
};
