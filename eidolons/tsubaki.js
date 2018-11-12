const embed = {
  "title": "Tsubaki",
  "description": "A master assassin given new life as a heroic spirit, Tsubaki specializes in espionage and combat medicine. She can quickly apply treatments that ease fatigue or let one drain a foe's life. With powerful chakra and a host of self-made drugs, she is an excellent - if dangerous - ally.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Tsubaki-gracevalhalla.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511451591094566922/tsubaki-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Tiger Leaf Powder x2](http://www.aurakingdom-db.com/item/11437-tiger-leaf-powder)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Refined Falcon Core x1](http://www.aurakingdom-db.com/item/10508-refined-falcon-core)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Navea Chef's Knife x1](http://www.aurakingdom-db.com/item/15240-navea-chefs-knife)\n   [• Poison Frog x5](http://www.aurakingdom-db.com/item/14463-poison-frog)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Greater Swiftness Potion x5](http://www.aurakingdom-db.com/item/12697-greater-swiftness-potion)\n  [• Aromatic Spores x5](http://www.aurakingdom-db.com/item/11443-aromatic-spores)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Hood of the Devourer x1](http://www.aurakingdom-db.com/item/10379-hood-of-the-devourer)\n  [• Coat of the Devourer x1](http://www.aurakingdom-db.com/item/10380-coat-of-the-devourer)\n  [• Plumed Ring x1](http://www.aurakingdom-db.com/item/11056-plumed-ring)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Tsubaki's Key Fragments x5](http://www.aurakingdom-db.com/item/11380-tsubakis-key-fragments)\n  [• Greater Elixir of Dark x25](http://www.aurakingdom-db.com/item/14292-greater-elixir-of-dark)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'tsubaki',
  description: 'tsubaki prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};