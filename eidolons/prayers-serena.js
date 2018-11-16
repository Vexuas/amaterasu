const embed = {
  "description": "Serena's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00029.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Star Obsidian x2](http://www.aurakingdom-db.com/item/10483-star-obsidian)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Miracle Plum x2](http://www.aurakingdom-db.com/item/11454-miracle-plum)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Mysterious Treasure Map Fragment x3](http://www.aurakingdom-db.com/item/13937-mysterious-treasure-map-fragment)\n[• Slighty Damaged Treasure x5](http://www.aurakingdom-db.com/item/14102-slighty-damaged-treasure)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Enhanced Reinforcing Pliers x1](http://www.aurakingdom-db.com/item/12764-enhanced-reinforcing-pliers)\n[• Reinforcing Pliers x3](http://www.aurakingdom-db.com/item/12746-reinforcing-pliers)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Malodnak's Dark Claw x1](http://www.aurakingdom-db.com/item/10384-malodnaks-dark-claw)\n[• Nazrudin's Horn of Power x1](http://www.aurakingdom-db.com/item/13297-nazrudins-horn-of-power)\n[• Grassy Green Rhinestone x50](http://www.aurakingdom-db.com/item/10498-grassy-green-rhinestone)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Serena's Key Fragments x5](http://www.aurakingdom-db.com/item/40219-serenas-key-fragments)\n[• Greater Elixir of Holy Light x25](http://www.aurakingdom-db.com/item/14291-greater-elixir-of-holy-light)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers serena',
  description: 'serena prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};