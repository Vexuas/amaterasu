const embed = {
  "title": "Nalani",
  "description": "A potentate who travels between the Aura Kingdom and the mortal realm, Nalani weighs justice and mercy, meting out judgment on humans and spirits, both living and dead. She is adept at harnessing the full might of holy energy, and foes quake at her radiant light.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Nalani_Wallpaper.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511414595072688143/nalani-discord.png"
  }
};

module.exports = {
  name: 'nalani',
  description: 'nalani prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};