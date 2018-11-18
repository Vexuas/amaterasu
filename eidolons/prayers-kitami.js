const embed = {
  "description": "Kitami's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00057.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Western Saury x2](http://www.aurakingdom-db.com/item/13045-western-saury)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Pearl of Light x15](http://www.aurakingdom-db.com/item/14245-pearl-of-light)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Katars of the Elite Guardian x1](http://www.aurakingdom-db.com/item/12382-katars-of-the-elite-guardian)\n[• Ironguard General's Gauntlets x1](http://www.aurakingdom-db.com/item/13259-ironguard-generals-gauntlets)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Wild Bird Eggs x20](http://www.aurakingdom-db.com/item/11465-wild-bird-eggs)\n[• Crimson Body x5](http://www.aurakingdom-db.com/item/14482-crimson-body)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Spicy Pickled Herring x10](http://www.aurakingdom-db.com/item/11631-spicy-pickled-herring)\n[• Fish with Mushroom Sauce x10](http://www.aurakingdom-db.com/item/11551-fish-with-mushroom-sauce)\n[• Gourmet Seafood Broth x10](http://www.aurakingdom-db.com/item/13842-gourmet-seafood-broth)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Kitami's Key Fragment x5](http://www.aurakingdom-db.com/item/40742-kitamis-key-fragment)\n[• Top-Quality Energized Crystal x10](http://www.aurakingdom-db.com/item/14123-top-quality-energized-crystal)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers kitami',
  description: 'kitami prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};