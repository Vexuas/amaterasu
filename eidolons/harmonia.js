const embed = {
  "title": "Harmonia",
  "description": "Harmonia's beautiful harp music soothes the savage beast and robs her enemies of the will to fight. Revealing herself only to a select few, the lucky chosen mark meeting her as one of the best moments of their lives.\n\nHarmonia uses music as a ranged weapon against her enemies. The notes she plucks take on physical form and inflict continuous damage. Harmonia's angelic voice can also heal her companions, boost morale, and strengthen the attacks of Envoys of Gaia. She's both a powerful ally and a loyal friend.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Freya_Wallpaper_3.png)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511575522199732273/freya-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Miracle Mineral Water x5](http://www.aurakingdom-db.com/item/11090-miracle-mineral-water)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Cocoa Fruit x20](http://www.aurakingdom-db.com/item/11462-cocoa-fruit)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Lightening Chisel x10](http://www.aurakingdom-db.com/item/12743-lightening-chisel)\n   [• Enhanced Agile Pliers x10](http://www.aurakingdom-db.com/item/12770-enhanced-agile-pliers)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Honey Snowdrop Ice Cream x5](http://www.aurakingdom-db.com/item/13869-honey-snowdrop-ice-cream)\n  [• Flower Scented Butter Cake x5](http://www.aurakingdom-db.com/item/13845-flower-scented-butter-cake)\n  [• Classic Hot Emerald Sencha x5](http://www.aurakingdom-db.com/item/13854-classic-hot-emerald-sencha)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Overlord's Harp x1](http://www.aurakingdom-db.com/item/14957-overlords-harp)\n  [• Sonia's Vow x1](http://www.aurakingdom-db.com/item/11978-sonias-vow)\n  [• Poseidon's Horn x1](http://www.aurakingdom-db.com/item/12817-poseidons-horn)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Harmonia's Key Fragment x5](http://www.aurakingdom-db.com/item/40679-harmonias-key-fragment)\n  [• Pure Crystallized Magic x10](http://www.aurakingdom-db.com/item/12539-pure-crystallized-magic)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'harmonia',
  description: 'harmonia prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};