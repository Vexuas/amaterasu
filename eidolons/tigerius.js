const embed = {
  "title": "Tigerius Caesar",
  "description": "The noble soul of Emperor Tigerius Caesar, lord of beasts, was preserved by the gods in an everlasting body. He expertly balances his regal bearing with his desire for the finest things in life, like royal buffets, servant girls, and of course, cat naps.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Ceasar_3_Star.jpg)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511445602803122187/tigerius-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Agility Potion x2](http://www.aurakingdom-db.com/item/12692-agility-potion)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Mercenary Captain's Fishing Rod x1](http://www.aurakingdom-db.com/item/12793-mercenary-captains-fishing-rod)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Vanilla Fudge Cookies x5](http://www.aurakingdom-db.com/item/11617-vanilla-fudge-cookies)\n   [• Nightcap x5](http://www.aurakingdom-db.com/item/11646-nightcap)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Lunar Wrist Core x1](http://www.aurakingdom-db.com/item/10521-lunar-wrist-core)\n  [• Lunar Boot Core x1](http://www.aurakingdom-db.com/item/10522-lunar-boot-core)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Elite Guardian's Composite Bow x1](http://www.aurakingdom-db.com/item/13387-elite-guardians-composite-bow)\n  [• Essence of the Wild x1](http://www.aurakingdom-db.com/item/12564-essence-of-the-wild)\n  [• Superior Fury Potion x50](http://www.aurakingdom-db.com/item/12703-superior-fury-potion)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Tigerius Caesar's Key Fragments x5](http://www.aurakingdom-db.com/item/11378-tigerius-caesars-key-fragments)\n  [• Enhanced Balancing Cutter x10](http://www.aurakingdom-db.com/item/13912-enhanced-balancing-cutter)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'tigerius',
  description: 'tigerius prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};