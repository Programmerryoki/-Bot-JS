const { createProfile } = require('../../helper/database');

module.exports = async (Discord, client, member) => {
  createProfile(member['user'].id, member.guild.id);
};
