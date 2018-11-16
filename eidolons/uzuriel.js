const embed = {
  "title": "Uzuriel",
  "description": "A messenger descended from the splendor of the Aura Kingdom, Uzuriel pledges her aid only to those who prove worthy. Favoring swift strikes to thundering blows, her holy winds uplift allies and subdue foes with a brilliant flourish.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Uzuriel-gracevalhalla.png)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511417137789796352/uzuriel-discord.png"
  }
};

module.exports = {
  name: 'uzuriel',
  description: 'uzuriel prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};