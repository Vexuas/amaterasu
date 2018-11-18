const embed = {
  "description": "Verdandi's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00059.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Red Leech x10](http://www.aurakingdom-db.com/item/13022-red-leech)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Passionate Lover x3](http://www.aurakingdom-db.com/item/11587-passionate-lover)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Ancient Amber x20](http://www.aurakingdom-db.com/item/10492-ancient-amber)\n[• Hands of Shadow x5](http://www.aurakingdom-db.com/item/12715-hands-of-shadow)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Gladiator's Wristwraps x1](http://www.aurakingdom-db.com/item/11291-gladiators-wristwraps)\n[• Gladiator's Ankle Boots x1](http://www.aurakingdom-db.com/item/11292-gladiators-ankle-boots)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Superior Health Potion x20](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n[• Well Preserved Fallenwisp x15](http://www.aurakingdom-db.com/item/14389-well-preserved-fallenwisp)\n[• Magically Concentrated Catalyst x10](http://www.aurakingdom-db.com/item/12557-magically-concentrated-catalyst)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Verdandi's Key Fragment x5](http://www.aurakingdom-db.com/item/40755-verdandis-key-fragment)\n[• Codex of the First Village x1](http://www.aurakingdom-db.com/item/11304-codex-of-the-first-village)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers verdandi',
  description: 'verdandi prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};