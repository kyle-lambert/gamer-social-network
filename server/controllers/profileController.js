const Profile = require('../models/profile');

async function createProfile(req, res) {
  const currentUserId = req.userId;

  if (currentUserId) {
    try {
      const 
      
    } catch (error) {
      res.status(400).json({ errors: ["No profile found"] });
    }
  } else {
    res.status(500).json({ errors: ["Server error"] });
  }
}

module.exports = {
  createProfile,
};
