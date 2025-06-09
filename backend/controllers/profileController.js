const profileData = require('../data/profile-data.json');

// Get all profile data
const getProfile = (req, res) => {
  try {
    res.json(profileData);
  } catch (error) {
    console.error('Error fetching profile data:', error);
    res.status(500).json({ error: 'Failed to fetch profile data' });
  }
};

module.exports = {
  getProfile
}; 