const embed = {
  "description": "Tigerius Caesar's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00025.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Agility Potion x2](http://www.aurakingdom-db.com/item/12692-agility-potion)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Mercenary Captain's Fishing Rod x1](http://www.aurakingdom-db.com/item/12793-mercenary-captains-fishing-rod)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Vanilla Fudge Cookies x5](http://www.aurakingdom-db.com/item/11617-vanilla-fudge-cookies)\n[• Nightcap x5](http://www.aurakingdom-db.com/item/11646-nightcap)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Lunar Wrist Core x1](http://www.aurakingdom-db.com/item/10521-lunar-wrist-core)\n[• Lunar Boot Core x1](http://www.aurakingdom-db.com/item/10522-lunar-boot-core)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Elite Guardian's Composite Bow x1](http://www.aurakingdom-db.com/item/13387-elite-guardians-composite-bow)\n[• Essence of the Wild x1](http://www.aurakingdom-db.com/item/12564-essence-of-the-wild)\n[• Superior Fury Potion x50](http://www.aurakingdom-db.com/item/12703-superior-fury-potion)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Tigerius Caesar's Key Fragments x5](http://www.aurakingdom-db.com/item/11378-tigerius-caesars-key-fragments)\n[• Enhanced Balancing Cutter x10](http://www.aurakingdom-db.com/item/13912-enhanced-balancing-cutter)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers tigerius caesar',
  description: 'tigerius prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};