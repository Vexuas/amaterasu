const embed = {
  "description": "Hades' Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00068.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Spicy Grilled Lamb Rib x2](http://www.aurakingdom-db.com/item/11080-spicy-grilled-lamb-rib)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Ventos Special Steak x5](http://www.aurakingdom-db.com/item/11097-ventos-special-steak)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Hands of Shadow x5](http://www.aurakingdom-db.com/item/12715-hands-of-shadow)\n[• Eternal Blood Vine Flower x15](http://www.aurakingdom-db.com/item/10497-eternal-blood-vine-flower)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Cruel Tyrant's Blades x1](http://www.aurakingdom-db.com/item/11252-cruel-tyrants-blades)\n[• Cruel Tyrant's Tachi x1](http://www.aurakingdom-db.com/item/13617-cruel-tyrants-tachi)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Heart of the Marsh x10](http://www.aurakingdom-db.com/item/12553-heart-of-the-marsh)\n[• Superior Health Potion x20](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n[• Well Preserved Fallenwisp x15](http://www.aurakingdom-db.com/item/14389-well-preserved-fallenwisp)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Hades' Key Fragment x5](http://www.aurakingdom-db.com/item/40796-hades-key-fragment)\n[• Ring of Resentment x1](http://www.aurakingdom-db.com/item/11980-ring-of-resentment)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers hades',
  description: 'hades prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};