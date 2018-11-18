const embed = {
  "description": "Diao Chan's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00042.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Cyan Iron Ore x5](http://www.aurakingdom-db.com/item/10479-cyan-iron-ore)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Colorful Fish Scales x5](http://www.aurakingdom-db.com/item/13165-colorful-fish-scales)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Greater Fury Potion x3](http://www.aurakingdom-db.com/item/12696-greater-fury-potion)\n[• Egg Nog with Brandy x3](http://www.aurakingdom-db.com/item/11662-egg-nog-with-brandy)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Strategist's Cap x1](http://www.aurakingdom-db.com/item/11276-strategists-cap)\n[• Strategist's Coat x1](http://www.aurakingdom-db.com/item/11277-strategists-coat)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Well Preserved Mutant Remains x5](http://www.aurakingdom-db.com/item/14390-well-preserved-mutant-remains)\n[• Fresh Demon Skin x3](http://www.aurakingdom-db.com/item/12551-fresh-demon-skin)\n[• Flawless Turtle Shell x5]( http://www.aurakingdom-db.com/item/12537-flawless-turtle-shell)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Diao Chan's Key Fragment x5](http://www.aurakingdom-db.com/item/40479-diao-chans-key-fragment)\n[• Sky Dragon King's Symbol x10](http://www.aurakingdom-db.com/item/13636-sky-dragon-kings-symbol)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers diao chan',
  description: 'diao chan prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};