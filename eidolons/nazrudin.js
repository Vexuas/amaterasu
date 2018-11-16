const embed = {
  "title": "Nazrudin",
  "description": "One of the grand dragons of the sea, Nazrudin is a master of water in all its forms. The sight of his white, serpentine body in flight is said to be a fortuitous omen to sailors, but if his wrath is awakened, he can sweep away a fleet as though it were chaff.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Nazrudin.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511429109994225670/nazrudin-discord.png"
  }
};

module.exports = {
  name: 'nazrudin',
  description: 'nazrudin prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};