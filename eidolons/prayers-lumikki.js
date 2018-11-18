const embed = {
  "description": "Lumikki's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00052.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Crimson Eggs x10](http://www.aurakingdom-db.com/item/11435-crimson-eggs)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Eternal Blood Vine Flower x20](http://www.aurakingdom-db.com/item/10497-eternal-blood-vine-flower)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Salad du Jour x10](http://www.aurakingdom-db.com/item/11599-salad-du-jour)\n[• Longevity Drink x5](http://www.aurakingdom-db.com/item/11591-longevity-drink)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Strategist's Cap x1](http://www.aurakingdom-db.com/item/11276-strategists-cap)\n[• Strategist's Coat x1](http://www.aurakingdom-db.com/item/11277-strategists-coat)\n[• Cruel Tyrant's Tachi x1](http://www.aurakingdom-db.com/item/13617-cruel-tyrants-tachi)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Enhanced Reinforcing Cutter x10](http://www.aurakingdom-db.com/item/13906-enhanced-reinforcing-cutter)\n[• Saint Hale's Broken Horn x1](http://www.aurakingdom-db.com/item/12532-saint-hales-broken-horn)\n[• Gladiator's Feather x5](http://www.aurakingdom-db.com/item/12556-gladiators-feather)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Lumikki's Key Fragment x5](http://www.aurakingdom-db.com/item/40715-lumikkis-key-fragment)\n[• Greater Elixir of Ice x15](http://www.aurakingdom-db.com/item/14288-greater-elixir-of-ice)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers lumikki',
  description: 'lumikki prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};