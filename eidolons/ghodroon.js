const embed = {
  "title": "Ghodroon",
  "description": "Dwelling in magmatic caverns far beneath the world's surface, the great dragon Ghodroon has the power to sear foes with boiling lava and superheated ash. He has a fondness for gems and precious metals, and will begrudgingly work with select humans to increase his hoard.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Ghodroon.jpg)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511433013083766784/ghodroon-discord.png"
  }
};

module.exports = {
  name: 'ghodroon',
  description: 'ghodroon prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};