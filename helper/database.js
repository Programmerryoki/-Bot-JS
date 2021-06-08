const profileModel = require('../models/profileSchema');

const createProfile = async (memberID, guildID) => {
  profileData = await profileModel.findOne({ userID: memberID });
  if (!profileData) {
    let profile = await profileModel.create({
      userID: memberID,
      serverID: guildID,
      bronze: 10,
      silver: 0,
      gold: 0,
      bank: 0,
    });
    profile.save();
  }
};

const deleteProfile = async (memberID) => {
  profileData = await profileModel.findOneAndDelete({ userID: memberID });
};

module.exports = {
  createProfile,
  deleteProfile,
};
