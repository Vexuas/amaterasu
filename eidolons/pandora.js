const embed = {
  "title": "Pandora",
  "description": "Lovely Pandora, lured by Dante into a deal for her soul, leads her beloved dog Lassie and the Envoys of Gaia on a search for the fiend.\n\nPandora attacks using fearsome calamities, and can also bewilder enemies, reducing their DEF and Attack DMG. She can restore the health and power level of comrades in danger. She's the help you want if you're facing fierce enemies.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Pandora_Wallpaper.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511589411188637696/pandora-discord.png"
  }
};

module.exports = {
  name: 'pandora',
  description: 'pandora prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};