// Sample data - in real app this would come from database
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
    // ... other members
  ],
  'app-development': [
    // ... app development members
  ]
};

export const getTeamMembersByDomain = async (domain) => {
  return teamData[domain] || [];
};

export const getTeamMemberDetails = async (domain, memberId) => {
  const members = teamData[domain] || [];
  return members.find(member => member.id === parseInt(memberId));
};