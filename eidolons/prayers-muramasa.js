const embed = {
  "description": "Muramasa's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00062.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Malachite Karma Bead x1](http://www.aurakingdom-db.com/item/11053-malachite-karma-bead)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Well Preserved Wisp x5](http://www.aurakingdom-db.com/item/14114-well-preserved-wisp)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• White Prayer Eggnog x3](http://www.aurakingdom-db.com/item/13878-white-prayer-eggnog)\n[• English Breakfast Tea x3](http://www.aurakingdom-db.com/item/11647-english-breakfast-tea)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Wind Ore x30](http://www.aurakingdom-db.com/item/16233-wind-ore)\n[• Mana Blood Crystal x30](http://www.aurakingdom-db.com/item/16236-mana-blood-crystal)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Superior Strength Tonic x40](http://www.aurakingdom-db.com/item/15028-superior-strength-tonic)\n[• Stalwart Commander's Helmet x1](http://www.aurakingdom-db.com/item/14996-stalwart-commanders-helmet)\n[• Stalwart Commander's Armor x1](http://www.aurakingdom-db.com/item/14997-stalwart-commanders-armor)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Muramasa's Key Fragment x5](http://www.aurakingdom-db.com/item/40775-muramasas-key-fragment)\n[• Takezo's Persistent Resolve x1](http://www.aurakingdom-db.com/item/13620-takezos-persistent-resolve)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers muramasa',
  description: 'muramasa prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};