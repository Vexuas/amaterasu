const embed = {
  description: "Tyr's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00055.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Cyan Iron Ore x2](http://www.aurakingdom-db.com/item/10479-cyan-iron-ore)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Chicken in Secret Sauce x2](http://www.aurakingdom-db.com/item/11522-chicken-in-secret-sauce)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Cocoa Fruit x3](http://www.aurakingdom-db.com/item/11462-cocoa-fruit)\n[• Grapes x3](http://www.aurakingdom-db.com/item/11464-grapes)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Enhanced Stalwart Iron Cutter x3](http://www.aurakingdom-db.com/item/13909-enhanced-stalwart-iron-cutter)\n[• Requiem Headguard x1](http://www.aurakingdom-db.com/item/10356-requiem-headguard)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Well Preserved Mana Parasite x10](http://www.aurakingdom-db.com/item/14391-well-preserved-mana-parasite)\n[• Willful Soul x1](http://www.aurakingdom-db.com/item/12544-willful-soul)\n[• Mighty Horn of Argus x1](http://www.aurakingdom-db.com/item/12461-mighty-horn-of-argus)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Tyr's Key Fragment x5](http://www.aurakingdom-db.com/item/40719-tyrs-key-fragment)\n[• Greater Elixir of Lightning x5](http://www.aurakingdom-db.com/item/14289-greater-elixir-of-lightning)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers tyr",
  description: "tyr prayers",
  execute(message, args) {
    embed.description = `${message.author} | Tyr's Prayers`;
    message.channel.send({ embed });
  }
};
