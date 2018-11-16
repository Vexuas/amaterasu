const embed = {
  "description": "Eligos' Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00010.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Isaias's Gift x1 - Note: Any](http://www.aurakingdom-db.com/item/11326-isaiass-gift)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Lava Alloy x3](http://www.aurakingdom-db.com/item/10500-lava-alloy)\n[• Refined Blade Core x1](http://www.aurakingdom-db.com/item/10507-refined-blade-core)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Great White Facemask x1](http://www.aurakingdom-db.com/item/12954-great-white-facemask)\n[• Great White Wetsuit x1](http://www.aurakingdom-db.com/item/12955-great-white-wetsuit)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Katars of the Elite Guardian x1](http://www.aurakingdom-db.com/item/12382-katars-of-the-elite-guardian)\n[• Battlefield Hood x1](http://www.aurakingdom-db.com/item/13262-battlefield-hood)\n[• Battlefield Breastplate x1](http://www.aurakingdom-db.com/item/13263-battlefield-breastplate)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Eligos's Key Fragments x5](http://www.aurakingdom-db.com/item/11363-eligoss-key-fragments)\n[• Stardust Flower Honey x25](http://www.aurakingdom-db.com/item/14615-stardust-flower-honey)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers eligos',
  description: 'eligos prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};