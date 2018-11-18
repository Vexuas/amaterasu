const embed = {
  "description": "Muse's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00053.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Herring x2](http://www.aurakingdom-db.com/item/13043-herring)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Clark's Fresh Milk x2](http://www.aurakingdom-db.com/item/11076-clarks-fresh-milk)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Lightening Spanner x1](http://www.aurakingdom-db.com/item/12741-lightening-spanner)\n[• Shrill Vocal Cords x1](http://www.aurakingdom-db.com/item/12520-shrill-vocal-cords)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Runed Bloodgem x1](http://www.aurakingdom-db.com/item/11055-runed-bloodgem)\n[• Jade Lazuli x5](http://www.aurakingdom-db.com/item/10496-jade-lazuli)\n[• Tiger's Eye Pearl x5](http://www.aurakingdom-db.com/item/10494-tigers-eye-pearl)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Grass Kingdom Hero's Belt x1](http://www.aurakingdom-db.com/item/11320-grass-kingdom-heros-belt)\n[• Superior Fury Potion x3](http://www.aurakingdom-db.com/item/12703-superior-fury-potion)\n[• Superior Stamina Potion x3](http://www.aurakingdom-db.com/item/12703-superior-fury-potion)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Muse's Key Fragment x5](http://www.aurakingdom-db.com/item/40710-muses-key-fragment)\n[• Battleground Wargod's Shawl x1](http://www.aurakingdom-db.com/item/15011-battleground-wargods-shawl)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers muse',
  description: 'muse prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};