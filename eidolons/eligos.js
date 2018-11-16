const embed = {
  "title": "Eligos",
  "description": "The shadowy Eligos is a Grand Duke of Pandemonium, but with a nobler temperament than many denizens of that forsaken realm. He seeks to train any willing Envoys of Gaia in his powerful dark arts, and claims he can foresee the outcome of any battle.\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511407678506139648/eligos-discord.png"
  }
};

module.exports = {
  name: 'eligos',
  description: 'eligos prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};