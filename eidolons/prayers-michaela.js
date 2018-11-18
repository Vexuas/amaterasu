const embed = {
  "description": "Michaela's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00061.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Fig x5](http://www.aurakingdom-db.com/item/13017-fig)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Revitilization Drink x3](http://www.aurakingdom-db.com/item/11589-revitilization-drink)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Ramgram's Crystalline Heart x1](http://www.aurakingdom-db.com/item/12511-ramgrams-crystalline-heart)\n[• Magically Enhanced Muck x5](http://www.aurakingdom-db.com/item/12519-magically-enhanced-muck)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Warrior's Light Armor x1](http://www.aurakingdom-db.com/item/11285-warriors-light-armor)\n[• Warrior's Leggings x1](http://www.aurakingdom-db.com/item/11287-warriors-leggings)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Superior Health Potion x10](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n[• Hood of the Devourer x1](http://www.aurakingdom-db.com/item/10379-hood-of-the-devourer)\n[• Well Preserved Fallenwisp x10](http://www.aurakingdom-db.com/item/14389-well-preserved-fallenwisp)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Michaela's Key Fragment x5](http://www.aurakingdom-db.com/item/40773-michaelas-key-fragment)\n[• Grass Kingdom's Sword of Bravery x1](http://www.aurakingdom-db.com/item/11299-grass-kingdoms-sword-of-bravery)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'prayers michaela',
  description: 'michaela prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};