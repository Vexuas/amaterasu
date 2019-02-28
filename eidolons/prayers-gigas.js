const embed = {
  description: "Gigas' Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00005.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Magnetic Alloy x2](http://www.aurakingdom-db.com/item/10501-magnetic-alloy)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Glimmering Secret Stone x2](http://www.aurakingdom-db.com/item/11030-glimmering-secret-stone)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Shrill Vocal Cords x1](http://www.aurakingdom-db.com/item/12520-shrill-vocal-cords)\n[• Stalwart Iron Grinding Wheel x3](http://www.aurakingdom-db.com/item/12748-stalwart-iron-grinding-wheel)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Greater Agility Potion x5](http://www.aurakingdom-db.com/item/12699-greater-agility-potion)\n[• Greater Fortitude Potion x5](http://www.aurakingdom-db.com/item/12700-greater-fortitude-potion)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Titan Warrior Headgear x1](http://www.aurakingdom-db.com/item/10369-titan-warrior-headgear)\n[• Titan Warrior Battle Coat x1](http://www.aurakingdom-db.com/item/10370-titan-warrior-battle-coat)\n[• Titan Warrior Gauntlets x1](http://www.aurakingdom-db.com/item/10371-titan-warrior-gauntlets)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Gigas's Key Fragments x5](http://www.aurakingdom-db.com/item/11358-gigass-key-fragments)\n[• Top-Quality Radioactive Stone x25](http://www.aurakingdom-db.com/item/14399-top-quality-radioactive-stone)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers gigas",
  description: "gigas prayers",
  execute(message, args) {
    embed.description = `${message.author} | Gigas' Prayers`;
    message.channel.send({ embed });
  }
};
