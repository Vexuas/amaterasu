const embed = {
  description: "Amaterasu's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00044.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Fluorescent Streamlined Fishing Rod x1](http://www.aurakingdom-db.com/item/12790-fluorescent-streamlined-fishing-rod)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Ritual Armor Core x1](http://www.aurakingdom-db.com/item/10511-ritual-armor-core)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Requiem Sash x1](http://www.aurakingdom-db.com/item/10360-requiem-sash)\n[• Cruel Tyrant's Heavy Axe x1](http://www.aurakingdom-db.com/item/11254-cruel-tyrants-heavy-axe)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Broiled Fish Fillet x5](http://www.aurakingdom-db.com/item/11549-broiled-fish-fillet)\n[• Mysterious Nocturne x5](http://www.aurakingdom-db.com/item/11566-mysterious-nocturne)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Heart of the Marsh x5](http://www.aurakingdom-db.com/item/12553-heart-of-the-marsh)\n[• Fusion Formula: Zaahir's Meteoric Shock x1](http://www.aurakingdom-db.com/item/12507-fusion-formula-zaahirs-meteoric-shock)\n[• Stalwart Iron Cutter x10](http://www.aurakingdom-db.com/item/13891-stalwart-iron-cutter)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Amaterasu's Key Fragment x5](http://www.aurakingdom-db.com/item/40572-amaterasus-key-fragment)\n[• Greater Elixir of Holy Light x40](http://www.aurakingdom-db.com/item/14291-greater-elixir-of-holy-light)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers amaterasu",
  description: "amaterasu prayers",
  execute(message, args) {
    embed.description = `${message.author} | Amaterasu's Prayers`;
    message.channel.send({ embed });
  }
};
