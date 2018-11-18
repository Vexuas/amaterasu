const embed = {
  "description": "Hel's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00035.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Refined Elemental Core x1](http://www.aurakingdom-db.com/item/10509-refined-elemental-core)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Wisdom of the Ancients x2](http://www.aurakingdom-db.com/item/14127-wisdom-of-the-ancients)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Navea Seasoned Skillet x1](http://www.aurakingdom-db.com/item/15239-navea-seasoned-skillet)\n[• Wild Bird Eggs x5](http://www.aurakingdom-db.com/item/11465-wild-bird-eggs)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Mushrooms x5](http://www.aurakingdom-db.com/item/11439-mushrooms)\n[• Navea Vanilla x5](http://www.aurakingdom-db.com/item/11440-navea-vanilla)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Wrist Wraps of the Devourer x1](http://www.aurakingdom-db.com/item/10381-wrist-wraps-of-the-devourer)\n[• Boots of the Devourer x1](http://www.aurakingdom-db.com/item/10382-boots-of-the-devourer)\n[• Sash of the Devourer x1](http://www.aurakingdom-db.com/item/10383-sash-of-the-devourer)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Hel's Key Fragments x5](http://www.aurakingdom-db.com/item/40329-hels-key-fragments)\n[• Peerless Strength Potion x25](http://www.aurakingdom-db.com/item/14281-peerless-strength-potion)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers hel',
  description: 'hel prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};