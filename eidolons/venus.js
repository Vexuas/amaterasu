const embed = {
  "title": "Venus",
  "description": "Venus, the goddess of love, went to the Envoys of Gaia looking for romance.\n\nGiving off a sweet pink aura, Venus releases her Cupid arrows everywhere. Not only can it reduce the enemy's damage and render them unconscious, the atmosphere of love can also restore the members' strength. She is truly a full-service Resource God.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Venus_Artwork.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511607088775036951/venus-discord.png"
  }
};

module.exports = {
  name: 'venus',
  description: 'venus prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};