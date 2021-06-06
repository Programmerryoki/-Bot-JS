const { pmMoney } = require('../helper/money');

module.exports = {
  name: 'money',
  aliases: ['m'],
  description: '',
  example: '',
  cooldown: 1,
  execute(client, message, args, cmd, Discord, profileData) {
    let moneyd = {
      'b':'Bronze',
      's':'Silver',
      'g':'Gold'
    };
    pmMoney(message.author.id, moneyd[args[0]], 1);
  },
};
