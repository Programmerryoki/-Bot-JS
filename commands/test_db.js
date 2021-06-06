const { createProfile, deleteProfile, listProfile } = require('../helper/database');

module.exports = {
  name: 'database',
  aliases: ['db'],
  description: '',
  example: '',
  cooldown: 1,
  execute(client, message, args, cmd, Discord, profileData) {
    // console.log(client);
    // console.log(message);
    console.log(args);
    console.log(cmd);
    if (args[0] == 'create') {
      createProfile(message['author']['id'], message['channel']['guild']['id']);
    } else if (args[0] == 'delete') {
      deleteProfile(message['author']['id']);
    } else if (args[0] == 'list') {
      listProfile();
    }
  },
};
