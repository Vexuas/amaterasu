const embed = {
  "title": "Undine",
  "description": "Undine is an arresting beauty descended from an esteemed family of sprites. Guided by the Cube of Gaia, she swam from the deepest depths of the sea to reach land. She then took on human form in order to walk alongside the Envoys of Gaia, whom she believed to be her soul mates.\n\nLike other noble water sprites, Undine possesses the power to control this natural element, manipulating its form to bind her enemies and lower their defenses. Her unique ability to bestow restorative blessings from the sea's depths make her an ideal battle partner.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Undine_Wallpaper_1.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511594755247833098/undine-discord.png"
  }
};

module.exports = {
  name: 'undine',
  description: 'undine prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};