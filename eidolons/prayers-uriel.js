
const embed = {
  "description": "Uriel's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00043.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Ambusher Leather Armor x1](http://www.aurakingdom-db.com/item/10349-ambusher-leather-armor)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Toto's Cursed Tusk x1](http://www.aurakingdom-db.com/item/10367-totos-cursed-tusk)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Flame Red Fish x10](http://www.aurakingdom-db.com/item/14456-flame-red-fish)\n[• Torian's Refined Cooking Set x1](http://www.aurakingdom-db.com/item/15244-torians-refined-cooking-set)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Argus's Broken Horn x1](http://www.aurakingdom-db.com/item/12527-arguss-broken-horn)\n[• Sharpening Saw x3](http://www.aurakingdom-db.com/item/13882-sharpening-saw)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Traditional Beef Broth x10](http://www.aurakingdom-db.com/item/13850-traditional-beef-broth)\n[• Luxury Surf 'n' Turf x10](http://www.aurakingdom-db.com/item/13873-luxury-surf-n-turf)\n[• Superior Strength Potion x10](http://www.aurakingdom-db.com/item/12702-superior-strength-potion)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Uriel's Key Fragment x5](http://www.aurakingdom-db.com/item/40529-uriels-key-fragment)\n[• Flawless Frozen Remains x10](http://www.aurakingdom-db.com/item/14408-flawless-frozen-remains)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers uriel',
  description: 'uriel prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};