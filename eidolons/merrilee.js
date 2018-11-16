const embed = {
  "title": "Merrilee",
  "description": "Merrilee's bubbly personality and can-do attitude make her a perfect partner. She does her best to keep you safe with defensive spells and healing magics, but she can also turn the tables on foes with vicious ice attacks.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Merrilee%27s_Maid_Costume_Illustration.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511215893808676865/merillee-discord.png"
  }
};

module.exports = {
  name: 'merrilee',
  description: 'merrilee prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};