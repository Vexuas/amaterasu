const embed = {
  "description": "Kaiser Zeta's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00034.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Lightening Spanner x2](http://www.aurakingdom-db.com/item/12741-lightening-spanner)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Molten Steel Stone x2](http://www.aurakingdom-db.com/item/10484-molten-steel-stone)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Revitilization Drink x5](http://www.aurakingdom-db.com/item/11589-revitilization-drink)\n[• Shining Secret Stone x5](http://www.aurakingdom-db.com/item/11031-shining-secret-stone)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Crustacean Warrior Sallet x1](http://www.aurakingdom-db.com/item/12962-crustacean-warrior-sallet)\n[• Crustacean Warrior Armor x1](http://www.aurakingdom-db.com/item/12963-crustacean-warrior-armor)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• High Voltage Crystal x5](http://www.aurakingdom-db.com/item/12560-high-voltage-crystal)\n[• Revelation Head Ornament x1](http://www.aurakingdom-db.com/item/10374-revelation-head-ornament)\n[• Revelation Light Armor x1](http://www.aurakingdom-db.com/item/10375-revelation-light-armor)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Kaiser Zeta's Key Fragments x5](http://www.aurakingdom-db.com/item/40327-kaiser-zetas-key-fragments)\n[• Top-Quality Mana Parasite x25](http://www.aurakingdom-db.com/item/14403-top-quality-mana-parasite)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers kaiser zeta',
  description: 'kaiser prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};