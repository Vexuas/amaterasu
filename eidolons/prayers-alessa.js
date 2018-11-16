const embed = {
  "description": "Alessa's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00004.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Steel Chef's Knife x1](http://www.aurakingdom-db.com/item/15237-steel-chefs-knife)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Fia's Brilliant Fairy Dust x1](http://www.aurakingdom-db.com/item/10354-fias-brilliant-fairy-dust)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Fight Club Prize (Elementary) x1 - Note: Any](http://www.aurakingdom-db.com/item/11967-fight-club-prize-elementary)\n[• Refined Suppression Core x1](http://www.aurakingdom-db.com/item/10516-refined-suppression-core)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Roast Chicken Lasagna x5](http://www.aurakingdom-db.com/item/11546-roast-chicken-lasagna)\n[• Fruit and Honey Tea x5](http://www.aurakingdom-db.com/item/11558-fruit-and-honey-tea)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Isaias's Gift x1 - Note: Any](http://www.aurakingdom-db.com/item/11326-isaiass-gift)\n[• Cactakara Forest's Patrol Reward x1 - Note: Any](http://www.aurakingdom-db.com/item/11382-cactakara-forests-patrol-reward)\n[• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Otherworldly Coin x20](http://www.aurakingdom-db.com/item/13534-otherworldly-coin)\n[• License to Kill x1](http://www.aurakingdom-db.com/item/11058-license-to-kill)\n[• Hero's Emblem x10](http://www.aurakingdom-db.com/item/11179-heros-emblem)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers alessa',
  description: 'alessa prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};