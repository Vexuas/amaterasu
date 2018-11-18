const embed = {
  "title": "Tyr",
  "description": "Bestowed the title Heroic Glory, Tyr has been training day and night. He swore that once he met his physical match, he would become a loyal servant.\n\nTyr wields the power of lightning to strike down his enemies. His unique weapons can transform into different forms to maximize his performance in both long-range and melee combat.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Tyr_Wallpaper_2.jpg)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511587019890360320/tyr-discord.png"
  }
};

module.exports = {
  name: 'tyr',
  description: 'tyr prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};