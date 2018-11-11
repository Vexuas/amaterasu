const embed = {
  "title": "Grimm",
  "description": "A recently-hatched dragon, Grimm doesn't let his size prevent him from displaying the confidence and tenacity of a full-grown drake. He enjoys zipping around enemies, body-slamming them in between blasts of torching flame.\n[Artwork](http://steamtradingcards.wikia.com/wiki/File:Aura_Kingdom_Artwork_6.jpg)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511231965437886474/grimm-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Slighty Damaged Animal Bones x2](http://www.aurakingdom-db.com/item/14099-slighty-damaged-animal-bones)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Lunar Trophy Core x1](http://www.aurakingdom-db.com/item/10524-lunar-trophy-core)\n   [• Shining Secret Stone x5](http://www.aurakingdom-db.com/item/11031-shining-secret-stone)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Fresh Garlic Sprouts x5](http://www.aurakingdom-db.com/item/11461-fresh-garlic-sprouts)\n  [• Old Coconut x5](http://www.aurakingdom-db.com/item/11460-old-coconut)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Scarlet Fire Crystal x50](http://www.aurakingdom-db.com/item/12576-scarlet-fire-crystal)\n  [• Flame Tentacle x10](http://www.aurakingdom-db.com/item/14481-flame-tentacle)\n  [• Elixir of Flame x20](http://www.aurakingdom-db.com/item/12708-elixir-of-flame)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Overlord's Artillery x1](http://www.aurakingdom-db.com/item/14955-overlords-artillery)\n  [• Stalwart Commander's Ring x1](http://www.aurakingdom-db.com/item/15007-stalwart-commanders-ring)\n  [• Hero's Emblem x10](http://www.aurakingdom-db.com/item/11179-heros-emblem)"
    }
  ]
};

module.exports = {
  name: 'grimm',
  description: 'grimm prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};