const embed = {
  "description": "Serif's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00001.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Clark's Fresh Milk x2](http://www.aurakingdom-db.com/item/11076-clarks-fresh-milk)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Strengthening Spanner x2](http://www.aurakingdom-db.com/item/12735-strengthening-spanner)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Requiem Headgear x1](http://www.aurakingdom-db.com/item/10356-requiem-headguard)\n[• Requiem Light Armor x1](http://www.aurakingdom-db.com/item/10357-requiem-light-armor)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Wise Master's Rod x1](http://www.aurakingdom-db.com/item/12813-wise-masters-rod)\n[• Thornfang Fish x5](http://www.aurakingdom-db.com/item/14467-thornfang-fish)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Fragrant Leaf Fruit Tea x10](http://www.aurakingdom-db.com/item/13865-fragrant-leaf-fruit-tea)\n[• Sweet Flower Cake x10](http://www.aurakingdom-db.com/item/13846-sweet-flower-cake)\n[• Fresh Corn Salad Wrap x10](http://www.aurakingdom-db.com/item/13856-fresh-corn-salad-wrap)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Hero's Emblem x10](http://www.aurakingdom-db.com/item/11179-heros-emblem)\n[• Merrilee's Loving Protection x1](http://www.aurakingdom-db.com/item/11118-merrilees-loving-protection)\n[• Merrilee's Loving Gaze x1](http://www.aurakingdom-db.com/item/11118-merrilees-loving-protection)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers serif',
  description: 'serif prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};