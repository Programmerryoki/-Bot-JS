const Discord = require('discord.js');

const DISCORD_TOKEN = process.env['DISCORD_TOKEN']

const client = new Discord.Client();

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const requires = fs.readdirSync('./handlers/').forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

client.login(DISCORD_TOKEN);
