const embed = {
  "title": "Cesela",
  "description": "Cesela streaks across the night sky on a blazing star, landing next to the Envoy of Gaia with the force of a fallen comet. In the pitch-black of pure night, Cesela pulses with an Eidolon's mysterious power.\n\nCesela dominates the night sky, harnessing the raw energy of the stars. This cosmic power, once compressed, deals massive Dark DMG to enemies. Harnessing the power of the moon, her enemies are unable to heal. Having her by your side is a surefire way to guarantee victory!\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Cesela_%26_Uriel_Wallpaper.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511498318522744851/cesela-discord.png"
  }
};

module.exports = {
  name: 'cesela',
  description: 'cesela prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};