const profileModel = require('../models/profileSchema');

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
  pmMoneyBronze,
  pmMoneySilver,
  pmMoneyGold,
};
