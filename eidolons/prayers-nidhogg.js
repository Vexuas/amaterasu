const embed = {
  description: "Nidhogg's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00073.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Sharp Fang x1](http://www.aurakingdom-db.com/item/11054-sharp-fang)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Well Preserved Wisp x5](http://www.aurakingdom-db.com/item/14114-well-preserved-wisp)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Exquisite Honey Nut Drink x3](http://www.aurakingdom-db.com/item/13862-exquisite-honey-nut-drink)\n[• Grandpa's Special Egg Nog x3](http://www.aurakingdom-db.com/item/11663-grandpas-special-egg-nog)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Corrosive Bitumen x30](http://www.aurakingdom-db.com/item/16238-corrosive-bitumen)\n[• Seer's Willow x30](http://www.aurakingdom-db.com/item/16244-seers-willow)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Superior Fury Tonic x40](http://www.aurakingdom-db.com/item/15029-superior-fury-tonic)\n[• Overlord's Sickle x1](http://www.aurakingdom-db.com/item/14961-overlords-sickle)\n[• Stalwart Commander's Armor x1](http://www.aurakingdom-db.com/item/14997-stalwart-commanders-armor)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Nidhogg's Key Fragment x5](http://www.aurakingdom-db.com/item/40887-nidhoggs-key-fragment)\n[• Top-Quality Wisp x10](http://www.aurakingdom-db.com/item/14125-top-quality-wisp)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers nidhogg",
  description: "nidhogg prayers",
  execute(message, args) {
    embed.description = `${message.author} | Nidhogg's Prayers`;
    message.channel.send({ embed });
  }
};
