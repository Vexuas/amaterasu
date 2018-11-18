const embed = {
  "description": "Shirayuki's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00032.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Catfish x2](http://www.aurakingdom-db.com/item/13049-catfish)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Ritual Trophy Core x1](http://www.aurakingdom-db.com/item/10515-ritual-trophy-core)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Gladiator's Cap x1](http://www.aurakingdom-db.com/item/11289-gladiators-cap)\n[• Gladiator's Coat x1](http://www.aurakingdom-db.com/item/11290-gladiators-coat)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Well Preserved Pottery Shard x5](http://www.aurakingdom-db.com/item/14106-well-preserved-pottery-shard)\n[• Oasis Beer x5](http://www.aurakingdom-db.com/item/11088-oasis-beer)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Deep Sea Tuna x1](http://www.aurakingdom-db.com/item/13078-deep-sea-tuna)\n[• Rainbow Salmon x1](http://www.aurakingdom-db.com/item/13084-rainbow-salmon)\n[• Wisdom Fish x100](http://www.aurakingdom-db.com/item/13229-wisdom-fish)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Shirayuki's Key Fragments x5](http://www.aurakingdom-db.com/item/40288-shirayukis-key-fragments)\n[• Toto's Roaring Waters x1](http://www.aurakingdom-db.com/item/12523-totos-roaring-waters)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers shirayuki',
  description: 'shirayuki prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};