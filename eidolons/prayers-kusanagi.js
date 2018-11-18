const embed = {
  "description": "Kusanagi's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00038.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Veggies with Fresh Aioli x2](http://www.aurakingdom-db.com/item/11526-veggies-with-fresh-aioli)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Aria Cap x1](http://www.aurakingdom-db.com/item/10361-aria-cap)\n[• Aria Coat x1](http://www.aurakingdom-db.com/item/10362-aria-coat)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Lightening Saw x1](http://www.aurakingdom-db.com/item/13885-lightening-saw)\n[• Immaculate Secret Stone x5](http://www.aurakingdom-db.com/item/11033-immaculate-secret-stone)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Warrior's Soul x3](http://www.aurakingdom-db.com/item/12720-warriors-soul)\n[• Superior Strength Potion x20](http://www.aurakingdom-db.com/item/12702-superior-strength-potion)\n[• Elixir of Lightning x20](http://www.aurakingdom-db.com/item/12710-elixir-of-lightning)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Kusanagi's Key Fragments x5](http://www.aurakingdom-db.com/item/40353-kusanagis-key-fragments)\n[• Sage Stone x25](http://www.aurakingdom-db.com/item/15015-sage-stone)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers kusanagi',
  description: 'kusanagi prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};