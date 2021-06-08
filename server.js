const express = require('express');

const server = express();

server.all("/", (req, res) => {
  res.send("Bot is running!");
});

keepAlive = () => {
  server.listen(1212, () => {
    console.log('Server is ready.');
  });
};

module.exports = keepAlive;