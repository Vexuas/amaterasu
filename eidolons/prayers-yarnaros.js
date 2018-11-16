const embed = {
  "description": "Yarnaros' Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00019.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Professional Stone Fishing Rod x1](http://www.aurakingdom-db.com/item/12788-professional-stone-fishing-rod)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Noripan's Emerald Leaf x1](http://www.aurakingdom-db.com/item/10353-noripans-emerald-leaf)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Refined Targeting Core x1](http://www.aurakingdom-db.com/item/10517-refined-targeting-core)\n[• Sharpening Spanner x3](http://www.aurakingdom-db.com/item/12738-sharpening-spanner)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Grandma's Greens x5](http://www.aurakingdom-db.com/item/11634-grandmas-greens)\n[• Garlic Steamed Veggies x5](http://www.aurakingdom-db.com/item/11633-garlic-steamed-veggies)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Top-Class Seafood and Greens Teppanyaki x1](http://www.aurakingdom-db.com/item/13874-top-class-seafood-and-greens-teppanyaki)\n[• Sweet Snowdrop Ice Cream x1](http://www.aurakingdom-db.com/item/13868-sweet-snowdrop-ice-cream)\n[• Exquisite Honey Nut Drink x1](http://www.aurakingdom-db.com/item/13862-exquisite-honey-nut-drink)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Yarnaros's Key Fragments x5](http://www.aurakingdom-db.com/item/11372-yarnaross-key-fragments)\n[• Talamund's Final Breath x1](http://www.aurakingdom-db.com/item/12533-talamunds-final-breath)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers yarnaros',
  description: 'yarnaros prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};