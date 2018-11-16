const embed = {
  "title": "Maja",
  "description": "A liaison between Pandemonium and the mortal realm, Maja's appearance is said to foretell disaster and destruction. Envoys who would ally with her must possess iron wills, but their tenacity will be rewarded with her command of dark magics and nefarious energies.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Maja-artwork.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511422834019532801/maja-discord.png"
  }
};

module.exports = {
  name: 'maja',
  description: 'maja prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};