const fs = require('fs');

module.exports = (client, Discord) => {
  const commandFiles = fs.readdirSync('./commands/').filter((file) => {
    return file.endsWith('.js');
  });
  console.log('Commands:\n', commandFiles);
  for (const file of commandFiles) {
    const command = require(`../commands/${file}`);
    if (command.name) {
      client.commands.set(command.name, command);
    } else {
      continue;
    }
  }
};
