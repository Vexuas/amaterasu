const embed = {
  "description": "Endora's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00030.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Miracle Flower x2](http://www.aurakingdom-db.com/item/11455-miracle-flower)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• PB&J x2](http://www.aurakingdom-db.com/item/11517-pbj)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Large Cricket x5](http://www.aurakingdom-db.com/item/14448-large-cricket)\n[• Eel x5](http://www.aurakingdom-db.com/item/13056-eel)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Firefly Star Stone x5](http://www.aurakingdom-db.com/item/10486-firefly-star-stone)\n[• Fine Frozen Remains x5](http://www.aurakingdom-db.com/item/14396-fine-frozen-remains)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Gekasso's Swiveling Eye x1](http://www.aurakingdom-db.com/item/12531-gekassos-swiveling-eye)\n[• Green Leech x1000](http://www.aurakingdom-db.com/item/13032-green-leech)\n[• Bloodthirsty Skin x10](http://www.aurakingdom-db.com/item/14480-bloodthirsty-skin)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Endora's Key Fragments x5](http://www.aurakingdom-db.com/item/40252-endoras-key-fragments)\n[• Blockhead's Nemesis Incinerator x1](http://www.aurakingdom-db.com/item/11303-blockheads-nemesis-incinerator)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers endora',
  description: 'endora prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};