const embed = {
  "description": "Demeter's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00067.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Princess Hardscale Fish x5](http://www.aurakingdom-db.com/item/14462-princess-hardscale-fish)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Titan's Spirit Flower x1](http://www.aurakingdom-db.com/item/14254-titans-spirit-flower)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Vigor Leaves x10](http://www.aurakingdom-db.com/item/11449-vigor-leaves)\n[• Cliffside Blossom x10](http://www.aurakingdom-db.com/item/15605-cliffside-blossom)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Lestaro's Strength of the Earth x1](http://www.aurakingdom-db.com/item/12522-lestaros-strength-of-the-earth)\n[• Ice Crystal Plant Extract x20](http://www.aurakingdom-db.com/item/14250-ice-crystal-plant-extract)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Enhanced Lightening Chisel x10](http://www.aurakingdom-db.com/item/12761-enhanced-lightening-chisel)\n[• Solid Alloy x10](http://www.aurakingdom-db.com/item/10503-solid-alloy)\n[• Nymphet's Graceful Hairpin x1](http://www.aurakingdom-db.com/item/12970-nymphets-graceful-hairpin)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Demeter's Key Fragment x5](http://www.aurakingdom-db.com/item/40791-demeters-key-fragment)\n[• Superior Health Potion x10](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers demeter',
  description: 'demeter prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};