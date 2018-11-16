const embed = {
  "description": "Uzuriel's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00013.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Large Lunchbox x2](http://www.aurakingdom-db.com/item/11593-large-lunchbox)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Cactakara Forest's Patrol Reward x1](http://www.aurakingdom-db.com/item/11382-cactakara-forests-patrol-reward)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Rainbow Scale x5](http://www.aurakingdom-db.com/item/13182-rainbow-scale)\n[• Rainbow Teardrop x5](http://www.aurakingdom-db.com/item/13183-rainbow-teardrop)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Tattooed Skin x1](http://www.aurakingdom-db.com/item/12541-tattooed-skin)\n[• Greater Strength Potion x5](http://www.aurakingdom-db.com/item/12695-greater-strength-potion)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Murfeo's Immortal Oath x1](http://www.aurakingdom-db.com/item/10386-murfeos-immortal-oath)\n[• Caroline's Intent x1](http://www.aurakingdom-db.com/item/10387-carolines-intent)\n[• Talamund's Soul x1](http://www.aurakingdom-db.com/item/10388-talamunds-soul)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Uzuriel's Key Fragments x5](http://www.aurakingdom-db.com/item/11366-uzuriels-key-fragments)\n[• Flawless Primitive Tool x25](http://www.aurakingdom-db.com/item/14406-flawless-primitive-tool)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers uzuriel',
  description: 'uzuriel prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};