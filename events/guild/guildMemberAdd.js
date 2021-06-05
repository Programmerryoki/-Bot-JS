const { createProfile } = require('../../helper/money');

module.exports = async (Discord, client, member) => {
  createProfile(member['user'].id, member.guild.id);
};
