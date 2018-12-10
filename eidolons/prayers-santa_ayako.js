const embed = {
  "description": "Santa Ayako's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00075.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Golden Globe x1](http://www.aurakingdom-db.com/item/11050-golden-globe)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Rainbow Fruit x2](http://www.aurakingdom-db.com/item/11429-rainbow-fruit)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Talen's Bloody Skin x1](http://www.aurakingdom-db.com/item/12530-talens-bloody-skin)\n[• Argus's Broken Horn x1](http://www.aurakingdom-db.com/item/12527-arguss-broken-horn)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Golden Lobster x3](http://www.aurakingdom-db.com/item/13069-golden-lobster)\n[• Alpaca Crab x3](http://www.aurakingdom-db.com/item/13685-alpaca-crab)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Chef's Special Vanilla Fried Pork Cutlet x5](http://www.aurakingdom-db.com/item/13838-chefs-special-vanilla-fried-pork-cutlet)\n[• White Prayer Eggnog x5](http://www.aurakingdom-db.com/item/13878-white-prayer-eggnog)\n[• Condensed Snowdrop Ice Cream x5](http://www.aurakingdom-db.com/item/13870-condensed-snowdrop-ice-cream)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Santa Ayako's Key fragment x5](http://www.aurakingdom-db.com/item/40891-santa-ayakos-key-fragment)\n[• Top-Quality Treasure x15](http://www.aurakingdom-db.com/item/14124-top-quality-treasure)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers santa ayako',
  description: 'santa ayako prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};