const embed = {
  "title": "Nalani",
  "description": "A potentate who travels between the Aura Kingdom and the mortal realm, Nalani weighs justice and mercy, meting out judgment on humans and spirits, both living and dead. She is adept at harnessing the full might of holy energy, and foes quake at her radiant light.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Nalani_Wallpaper.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511414595072688143/nalani-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Golden Globe x1](http://www.aurakingdom-db.com/item/11050-golden-globe)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Petal-shaped Gold Scale x5](http://www.aurakingdom-db.com/item/13177-petal-shaped-gold-scale)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Murky Coffee x15](http://www.aurakingdom-db.com/item/11096-murky-coffee)\n   [• Highly Caffeinated Tea x15](http://www.aurakingdom-db.com/item/11622-highly-caffeinated-tea)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Stalwart Iron Plate x10](http://www.aurakingdom-db.com/item/12747-stalwart-iron-plate)\n  [• Enhanced Stalwart Iron Plate x10](http://www.aurakingdom-db.com/item/12765-enhanced-stalwart-iron-plate)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Cruel Tyrant's Grimoire x1](http://www.aurakingdom-db.com/item/11258-cruel-tyrants-grimoire)\n  [• Warrior's Headgear x1](http://www.aurakingdom-db.com/item/11284-warriors-headgear)\n  [• Warrior's Leggings x1](http://www.aurakingdom-db.com/item/11287-warriors-leggings)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Nalani's Key Fragments x5](http://www.aurakingdom-db.com/item/11365-nalanis-key-fragments)\n  [• Flawless Primitive Tool x10](http://www.aurakingdom-db.com/item/14406-flawless-primitive-tool)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'nalani',
  description: 'nalani prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};