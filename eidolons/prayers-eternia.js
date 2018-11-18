const embed = {
  "description": "Eternia's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00047.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Glistening White Fish Scales x5](http://www.aurakingdom-db.com/item/13164-glistening-white-fish-scales)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Well Preserved Marine Fossil x2](http://www.aurakingdom-db.com/item/14111-well-preserved-marine-fossil)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Greater Health Potion x3](http://www.aurakingdom-db.com/item/12694-greater-health-potion)\n[• Eternal Stoneheart x1](http://www.aurakingdom-db.com/item/12521-eternal-stoneheart)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Flavored Fruit Tea x10](http://www.aurakingdom-db.com/item/13806-flavored-fruit-tea)\n[• Crispy Cake x10](http://www.aurakingdom-db.com/item/13844-crispy-cake)\n[• Condensed Snowdrop Ice Cream x10](http://www.aurakingdom-db.com/item/13870-condensed-snowdrop-ice-cream)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Enhanced Sharpening Saw x5](http://www.aurakingdom-db.com/item/13900-enhanced-sharpening-saw)\n[• Superior Stamina Tonic x40](http://www.aurakingdom-db.com/item/15031-superior-stamina-tonic)\n[• Seer's Willow x40](http://www.aurakingdom-db.com/item/16244-seers-willow)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Eternia's Key Fragments x5](http://www.aurakingdom-db.com/item/40622-eternias-key-fragments)\n[• Flawless Corroded Relic x10](http://www.aurakingdom-db.com/item/14405-flawless-corroded-relic)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers eternia',
  description: 'eternia prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};