const embed = {
  "title": "Merrilee",
  "description": "Merrilee's bubbly personality and can-do attitude make her a perfect partner. She does her best to keep you safe with defensive spells and healing magics, but she can also turn the tables on foes with vicious ice attacks.",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511215893808676865/merillee-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Move SPD +5%\n★★☆☆ : HEAL +5%\n★★★☆ : Convert 2% of damage dealt by skills into HP*\n★★★★ : Move SPD +10%```Note: *This is 80% less effective against Boss Monsters of certain Multiplayer instances.\n\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Merrilee%27s_Maid_Costume_Illustration.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/3-merrilee)"
    }
  ]
};

module.exports = {
  name: 'merrilee',
  description: 'merrilee info',
  execute(message, args) {
    message.reply({ embed });
  },
};