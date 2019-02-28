const embed = {
  description: "Harmonia's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00051.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Miracle Mineral Water x5](http://www.aurakingdom-db.com/item/11090-miracle-mineral-water)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Cocoa Fruit x20](http://www.aurakingdom-db.com/item/11462-cocoa-fruit)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Lightening Chisel x10](http://www.aurakingdom-db.com/item/12743-lightening-chisel)\n[• Enhanced Agile Pliers x10](http://www.aurakingdom-db.com/item/12770-enhanced-agile-pliers)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Honey Snowdrop Ice Cream x5](http://www.aurakingdom-db.com/item/13869-honey-snowdrop-ice-cream)\n[• Flower Scented Butter Cake x5](http://www.aurakingdom-db.com/item/13845-flower-scented-butter-cake)\n[• Classic Hot Emerald Sencha x5](http://www.aurakingdom-db.com/item/13854-classic-hot-emerald-sencha)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Overlord's Harp x1](http://www.aurakingdom-db.com/item/14957-overlords-harp)\n[• Sonia's Vow x1](http://www.aurakingdom-db.com/item/11978-sonias-vow)\n[• Poseidon's Horn x1](http://www.aurakingdom-db.com/item/12817-poseidons-horn)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Harmonia's Key Fragment x5](http://www.aurakingdom-db.com/item/40679-harmonias-key-fragment)\n[• Pure Crystallized Magic x10](http://www.aurakingdom-db.com/item/12539-pure-crystallized-magic)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers harmonia",
  description: "harmonia prayers",
  execute(message, args) {
    embed.description = `${message.author} | Harmonia's Prayers`;
    message.channel.send({ embed });
  }
};
