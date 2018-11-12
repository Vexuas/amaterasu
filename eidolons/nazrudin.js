const embed = {
  "title": "Nazrudin",
  "description": "One of the grand dragons of the sea, Nazrudin is a master of water in all its forms. The sight of his white, serpentine body in flight is said to be a fortuitous omen to sailors, but if his wrath is awakened, he can sweep away a fleet as though it were chaff.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Nazrudin.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511429109994225670/nazrudin-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Obsidian Kitchen Set x1](http://www.aurakingdom-db.com/item/15238-obsidian-kitchen-set)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Peanut Cookies x2](http://www.aurakingdom-db.com/item/11529-peanut-cookies)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Mythical Angler Helm x1](http://www.aurakingdom-db.com/item/12938-mythical-angler-helm)\n   [• Mythical Angler Coat x1](http://www.aurakingdom-db.com/item/12939-mythical-angler-coat)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Well Preserved Chinaware x5](http://www.aurakingdom-db.com/item/14105-well-preserved-chinaware)\n  [• Flawless Secret Stone x5](http://www.aurakingdom-db.com/item/11032-flawless-secret-stone)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Revelation Gauntlets x1](http://www.aurakingdom-db.com/item/10376-revelation-gauntlets)\n  [• Revelation Long Boots x1](http://www.aurakingdom-db.com/item/10377-revelation-long-boots)\n  [• Revelation Belt x1](http://www.aurakingdom-db.com/item/10378-revelation-belt)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Nazrudin's Key Fragments x5](http://www.aurakingdom-db.com/item/11371-nazrudins-key-fragments)\n  [• Nazrudin's Gem x1](http://www.aurakingdom-db.com/item/13295-nazrudins-gem)\n  [•  Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'nazrudin',
  description: 'nazrudin prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};