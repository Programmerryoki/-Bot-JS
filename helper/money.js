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

const pmMoneyBronze = async (member, amount) => {
  let profile = await profileModel.findOneAndUpdate(
    {
      userID: member.id,
    },
    {
      $inc: {
        bronze: amount,
      },
    }
  );
};

const pmMoneySilver = async (member, amount) => {
  let profile = await profileModel.findOneAndUpdate(
    {
      userID: member.id,
    },
    {
      $inc: {
        silver: amount,
      },
    }
  );
};

const pmMoneyGold = async (member, amount) => {
  let profile = await profileModel.findOneAndUpdate(
    {
      userID: member.id,
    },
    {
      $inc: {
        gold: amount,
      },
    }
  );
};

module.exports = {
  createProfile,
  deleteProfile,
  pmMoneyBronze,
  pmMoneySilver,
  pmMoneyGold,
};
