const embed = {
  "description": "Venus' Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00063.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Crescent Nectar x10](http://www.aurakingdom-db.com/item/11436-crescent-nectar)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Cocoa Fruit x15](http://www.aurakingdom-db.com/item/11462-cocoa-fruit)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Lightening Hammer x10](http://www.aurakingdom-db.com/charts/archeology-schedule)\n[• Enhanced Lightening Chisel x10](http://www.aurakingdom-db.com/item/12761-enhanced-lightening-chisel)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Honey Snowdrop Ice Cream x5](http://www.aurakingdom-db.com/item/13869-honey-snowdrop-ice-cream)\n[• Flower Scented Butter Cake x5](http://www.aurakingdom-db.com/item/13845-flower-scented-butter-cake)\n[• Extra Strong Honey Fruit Tea x5](http://www.aurakingdom-db.com/item/13866-extra-strong-honey-fruit-tea)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Overlord's War Bow x1](http://www.aurakingdom-db.com/item/14959-overlords-war-bow)\n[• Sonia's Vow x1](http://www.aurakingdom-db.com/item/11978-sonias-vow)\n[• Grand Duke's Rod x1](http://www.aurakingdom-db.com/item/12815-grand-dukes-rod)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Venus' Key Fragment x5](http://www.aurakingdom-db.com/item/40777-venus-key-fragment)\n[• Valerie's Faecrafted Belt x1](http://www.aurakingdom-db.com/item/11310-valeries-faecrafted-belt)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers venus',
  description: 'venus prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};