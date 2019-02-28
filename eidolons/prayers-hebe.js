const embed = {
  description: "Hebe's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00065.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Well Preserved Treasure x5](http://www.aurakingdom-db.com/item/14113-well-preserved-treasure)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Royal Rainbow x1](http://www.aurakingdom-db.com/item/12809-royal-rainbow)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Giant Egg x10](http://www.aurakingdom-db.com/item/11450-giant-egg)\n[• Highland Wheat Flour x10](http://www.aurakingdom-db.com/item/11459-highland-wheat-flour)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Aria Coat x1](http://www.aurakingdom-db.com/item/10362-aria-coat)\n[• Aria Sash x1](http://www.aurakingdom-db.com/item/10365-aria-sash)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Enhanced Reinforcing Metal Plate x10](http://www.aurakingdom-db.com/item/12762-enhanced-reinforcing-metal-plate)\n[• Enhanced Agile Metal Plate x10](http://www.aurakingdom-db.com/item/12768-enhanced-agile-metal-plate)\n[• Enhanced Sharpening Chisel x10](http://www.aurakingdom-db.com/item/12758-enhanced-sharpening-chisel)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Hebe's Key Fragment x5](http://www.aurakingdom-db.com/item/40781-hebes-key-fragment)\n[• Bayin's Amulet of Warmth x1](http://www.aurakingdom-db.com/item/13342-bayins-amulet-of-warmth)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: "prayers hebe",
  description: "hebe prayers",
  execute(message, args) {
    embed.description = `${message.author} | Hebe's Prayers`;
    message.channel.send({ embed });
  }
};
