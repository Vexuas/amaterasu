const embed = {
  description: "Nalani's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00012.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Golden Globe x1](http://www.aurakingdom-db.com/item/11050-golden-globe)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Petal-shaped Gold Scale x5](http://www.aurakingdom-db.com/item/13177-petal-shaped-gold-scale)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Murky Coffee x15](http://www.aurakingdom-db.com/item/11096-murky-coffee)\n[• Highly Caffeinated Tea x15](http://www.aurakingdom-db.com/item/11622-highly-caffeinated-tea)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Stalwart Iron Plate x10](http://www.aurakingdom-db.com/item/12747-stalwart-iron-plate)\n[• Enhanced Stalwart Iron Plate x10](http://www.aurakingdom-db.com/item/12765-enhanced-stalwart-iron-plate)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Cruel Tyrant's Grimoire x1](http://www.aurakingdom-db.com/item/11258-cruel-tyrants-grimoire)\n[• Warrior's Headgear x1](http://www.aurakingdom-db.com/item/11284-warriors-headgear)\n[• Warrior's Leggings x1](http://www.aurakingdom-db.com/item/11287-warriors-leggings)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Nalani's Key Fragments x5](http://www.aurakingdom-db.com/item/11365-nalanis-key-fragments)\n[• Flawless Primitive Tool x10](http://www.aurakingdom-db.com/item/14406-flawless-primitive-tool)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers nalani",
  description: "nalani prayers",
  execute(message, args) {
    embed.description = `${message.author} | Nalani's Prayers`;
    message.channel.send({ embed });
  }
};
