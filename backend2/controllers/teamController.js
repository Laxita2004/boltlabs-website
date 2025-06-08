

// Sample mock data - replaces database
const teamData = {
  'web-development': [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Frontend Architect",
      expertise: ["React", "Tailwind CSS", "TypeScript"],
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      projects: 18,
      github: "#",
      linkedin: "#",
      bio: "Specializes in building performant, accessible web applications"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Fullstack Developer",
      expertise: ["Node.js", "GraphQL", "AWS"],
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      projects: 23,
      github: "#",
      linkedin: "#",
      bio: "Passionate about scalable backend systems"
    }
  ],
  'app-development': [
    {
      id: 3,
      name: "Michael Rodriguez",
      role: "Mobile Lead",
      expertise: ["React Native", "Flutter", "Firebase"],
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
      projects: 15,
      github: "#",
      linkedin: "#",
      bio: "Creates buttery smooth mobile experiences"
    }
  ],
  'design': [], // Empty arrays for other valid domains
  'marketing': []
};

// Get all team members by domain
export const getDomainMembers = async (req, res) => {
  try {
    const { domain } = req.params;
    
    // Validate domain exists
    if (!teamData[domain]) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid domain specified',
        validDomains: Object.keys(teamData)
      });
    }

    const members = teamData[domain];

    if (members.length === 0) {
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

// Get single team member
export const getMemberProfile = async (req, res) => {
  try {
    const { domain, memberId } = req.params;
    const id = parseInt(memberId);

    // Validate domain exists
    if (!teamData[domain]) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid domain specified',
        validDomains: Object.keys(teamData)
      });
    }

    const member = teamData[domain].find(m => m.id === id);

    if (!member) {
      return res.status(404).json({
        success: false,
        message: 'Member not found in the specified domain'
      });
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

// Create new team member (optional)
export const createTeamMember = async (req, res) => {
  try {
    const { domain } = req.body;
    
    if (!teamData[domain]) {
      return res.status(400).json({
        success: false,
        message: 'Invalid domain specified',
        validDomains: Object.keys(teamData)
      });
    }

    const newId = Math.max(...teamData[domain].map(m => m.id), 0) + 1;
    const newMember = {
      id: newId,
      ...req.body
    };

    teamData[domain].push(newMember);

    res.status(201).json({
      success: true,
      data: newMember
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Validation error',
      error: error.message
    });
  }
};