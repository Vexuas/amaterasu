const embed = {
  "title": "Benkei",
  "description": "Wanderer of all realms and planes, Benkei's flamboyant appearance belies his role as a protector in matters of the spirit world. From bodyguard to siege-breaker, he mounts a powerful offense from a bracing defense, and has recently added humans to his clientele.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Higa.jpg)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511399173799804929/benkei-discord.png"
  }
};

module.exports = {
  name: 'benkei',
  description: 'benkei prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};