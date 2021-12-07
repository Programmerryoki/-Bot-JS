const Discord = require('discord.js');
const keepAlive = require("./server");
const DISCORD_TOKEN = process.env['DISCORD_TOKEN']
const MONGODB_SRV = process.env['MONGODB_SRV']

const client = new Discord.Client();
const mongoose = require('mongoose');

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const requires = fs.readdirSync('./handlers/').forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

mongoose
  .connect(MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(err);
  });

keepAlive();
client.login(DISCORD_TOKEN);
