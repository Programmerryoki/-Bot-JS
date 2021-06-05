module.exports = {
  name: 'ping',
  description: 'This is a ping command!',
  cooldown: 1,
  execute(client, message, args, cmd, Discord, profileData) {
    message.channel.send('pong!');
  },
};
