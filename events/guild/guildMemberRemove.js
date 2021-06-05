const { deleteProfile } = require('../../helper/money');

module.exports = async (Discord, client, member) => {
  deleteProfile(member['user'].id);
};
