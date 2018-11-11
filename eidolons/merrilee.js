const embed = {
  "title": "Merrilee",
  "description": "Merrilee's bubbly personality and can-do attitude make her a perfect partner. She does her best to keep you safe with defensive spells and healing magics, but she can also turn the tables on foes with vicious ice attacks.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Merrilee%27s_Maid_Costume_Illustration.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511215893808676865/merillee-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Fragrant Flowers x2](http://www.aurakingdom-db.com/item/11431-fragrant-flowers)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Giant Fish Bones x2](http://www.aurakingdom-db.com/item/13154-giant-fish-bones)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Luminous Emerald x5](http://www.aurakingdom-db.com/item/10491-luminous-emerald)\n   [• Ancient Amber x5](http://www.aurakingdom-db.com/item/10492-ancient-amber)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Navea Seasoned Skillet x1](http://www.aurakingdom-db.com/item/15239-navea-seasoned-skillet)\n  [• Aromatic Spores x5](http://www.aurakingdom-db.com/item/11443-aromatic-spores)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Elite Guardian's Staff x1](http://www.aurakingdom-db.com/item/11263-elite-guardians-staff)\n  [• Ironguard General's Pendant x1](http://www.aurakingdom-db.com/item/13457-ironguard-generals-pendant)\n  [• Ironguard General's Ring x1](http://www.aurakingdom-db.com/item/13458-ironguard-generals-ring)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Otherworldly Coin x20](http://www.aurakingdom-db.com/item/13534-otherworldly-coin)\n  [• Greater Elixir of Lightning x20](http://www.aurakingdom-db.com/item/14289-greater-elixir-of-lightning)\n  [• Hero's Emblem x10](http://www.aurakingdom-db.com/item/11179-heros-emblem)"
    }
  ]
};

module.exports = {
  name: 'merrilee',
  description: 'merrilee prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};