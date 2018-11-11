const embed = {
  "title": "Gigas",
  "description": "Wrought of enchanted iron by a civilization long lost to memory, Gigas feels no pain and yields to no opponent. It is said that, in recognition of its strength and valor, the gods gave it a hero's soul, allowing it to exist eternally.\n[Artwork](http://steamtradingcards.wikia.com/wiki/File:Aura_Kingdom_Artwork_3.jpg)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511245185766916102/gigas-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Magnetic Alloy x2](http://www.aurakingdom-db.com/item/10501-magnetic-alloy)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Glimmering Secret Stone x2](http://www.aurakingdom-db.com/item/11030-glimmering-secret-stone)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Shrill Vocal Cords x1](http://www.aurakingdom-db.com/item/12520-shrill-vocal-cords)\n   [• Stalwart Iron Grinding Wheel x3](http://www.aurakingdom-db.com/item/12748-stalwart-iron-grinding-wheel)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Greater Agility Potion x5](http://www.aurakingdom-db.com/item/12699-greater-agility-potion)\n  [• Greater Fortitude Potion x5](http://www.aurakingdom-db.com/item/12700-greater-fortitude-potion)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Titan Warrior Headgear x1](http://www.aurakingdom-db.com/item/10369-titan-warrior-headgear)\n  [• Titan Warrior Battle Coat x1](http://www.aurakingdom-db.com/item/10370-titan-warrior-battle-coat)\n  [• Titan Warrior Gauntlets x1](http://www.aurakingdom-db.com/item/10371-titan-warrior-gauntlets)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Gigas's Key Fragments x5](http://www.aurakingdom-db.com/item/11358-gigass-key-fragments)\n  [• Top-Quality Radioactive Stone x25](http://www.aurakingdom-db.com/item/14399-top-quality-radioactive-stone)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'gigas',
  description: 'gigas prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};