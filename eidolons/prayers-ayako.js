const embed = {
  "description": "Ayako's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00046.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Astral Orb x1](http://www.aurakingdom-db.com/item/11051-astral-orb)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Small Berry x10](http://www.aurakingdom-db.com/item/11447-small-berry)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Greater Swiftness Potion x10](http://www.aurakingdom-db.com/item/12697-greater-swiftness-potion)\n[• Fresh Sirloin x100](http://www.aurakingdom-db.com/item/14452-fresh-sirloin)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Provincial Beef Broth x10](http://www.aurakingdom-db.com/item/13849-provincial-beef-broth)\n[• Dream Honey Glazed Pork Cutlet x10](http://www.aurakingdom-db.com/item/13836-dream-honey-glazed-pork-cutlet)\n[• Chef's Special Vanilla Fried Pork Cutlet x10](http://www.aurakingdom-db.com/item/13838-chefs-special-vanilla-fried-pork-cutlet)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Elite Guardian's Cannon x1](http://www.aurakingdom-db.com/item/11265-elite-guardians-cannon)\n[• Titan Warrior Battle Boots x1](http://www.aurakingdom-db.com/item/10372-titan-warrior-battle-boots)\n[• Titan Warrior Waist Armor x1](http://www.aurakingdom-db.com/item/10373-titan-warrior-waist-armor)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Ayako's Key Fragment x5](http://www.aurakingdom-db.com/item/40617-ayakos-key-fragment)\n[• Flawless Frosted Handcrafted Relic x15](http://www.aurakingdom-db.com/item/14407-flawless-frosted-handcrafted-relic)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers ayako',
  description: 'ayako prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};