const embed = {
  "description": "Vermilion's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00031.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Carp x2](http://www.aurakingdom-db.com/item/13055-carp)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Ambusher Leather Hat x1](http://www.aurakingdom-db.com/item/10348-ambusher-leather-hat)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Frosted Berry Swiss Roll x5](http://www.aurakingdom-db.com/item/11602-frosted-berry-swiss-roll)\n[• Tea with Almond Milk x5](http://www.aurakingdom-db.com/item/11621-tea-with-almond-milk)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Great General's Wristguards x1](http://www.aurakingdom-db.com/item/11270-great-generals-wristguards)\n[• Great General's Leggings x1](http://www.aurakingdom-db.com/item/11271-great-generals-leggings)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Grand Duke's Rod x1](http://www.aurakingdom-db.com/item/12815-grand-dukes-rod)\n[• Grand Duke's Crown x1](http://www.aurakingdom-db.com/item/12990-grand-dukes-crown)\n[• Grand Duke's Celestial Robes x1](http://www.aurakingdom-db.com/item/12991-grand-dukes-celestial-robes)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Vermilion's Key Fragments x5](http://www.aurakingdom-db.com/item/40273-vermilions-key-fragments)\n[• Greater Elixir of Flame x25](http://www.aurakingdom-db.com/item/14287-greater-elixir-of-flame)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers vermilion',
  description: 'vermilion prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};