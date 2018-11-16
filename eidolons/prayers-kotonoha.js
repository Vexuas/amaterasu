const embed = {
  "description": "Kotonoha's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00024.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Bread Pudding x2](http://www.aurakingdom-db.com/item/11533-bread-pudding)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Isaias's Gift x1 - Note: Any](http://www.aurakingdom-db.com/item/11326-isaiass-gift)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Agile Shark Hunting Mask x1](http://www.aurakingdom-db.com/item/12930-agile-shark-hunting-mask)\n[• Agile Shark Hunting Wetsuit x1](http://www.aurakingdom-db.com/item/12931-agile-shark-hunting-wetsuit)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Magically Enhanced Muck x1](http://www.aurakingdom-db.com/item/12519-magically-enhanced-muck)\n[• Greater Stamina Potion x5](http://www.aurakingdom-db.com/item/12698-greater-stamina-potion)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Ranger's Elite Cap x1](http://www.aurakingdom-db.com/item/13267-rangers-elite-cap)\n[• Ranger's Elite Tunic x1](http://www.aurakingdom-db.com/item/13268-rangers-elite-tunic)\n[• Ranger's Elite Belt x1](http://www.aurakingdom-db.com/item/13271-rangers-elite-belt)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Kotonoha's Key Fragments x5](http://www.aurakingdom-db.com/item/11377-kotonohas-key-fragments)\n[• Flawless Crumbling Tablet x25](http://www.aurakingdom-db.com/item/14404-flawless-crumbling-tablet)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers kotonoha',
  description: 'kotonoha prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};