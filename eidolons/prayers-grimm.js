const embed = {
  "description": "Grimm's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00003.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Slighty Damaged Animal Bones x2](http://www.aurakingdom-db.com/item/14099-slighty-damaged-animal-bones)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Lunar Trophy Core x1](http://www.aurakingdom-db.com/item/10524-lunar-trophy-core)\n[• Shining Secret Stone x5](http://www.aurakingdom-db.com/item/11031-shining-secret-stone)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Fresh Garlic Sprouts x5](http://www.aurakingdom-db.com/item/11461-fresh-garlic-sprouts)\n[• Old Coconut x5](http://www.aurakingdom-db.com/item/11460-old-coconut)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Scarlet Fire Crystal x50](http://www.aurakingdom-db.com/item/12576-scarlet-fire-crystal)\n[• Flame Tentacle x10](http://www.aurakingdom-db.com/item/14481-flame-tentacle)\n[• Elixir of Flame x20](http://www.aurakingdom-db.com/item/12708-elixir-of-flame)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Overlord's Artillery x1](http://www.aurakingdom-db.com/item/14955-overlords-artillery)\n[• Stalwart Commander's Ring x1](http://www.aurakingdom-db.com/item/15007-stalwart-commanders-ring)\n[• Hero's Emblem x10](http://www.aurakingdom-db.com/item/11179-heros-emblem)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers grimm',
  description: 'grimm prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};