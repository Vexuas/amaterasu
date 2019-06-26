const embed = {
  description: "Merrilee's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00002.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Fragrant Flowers x2](http://www.aurakingdom-db.com/item/11431-fragrant-flowers)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Giant Fish Bones x2](http://www.aurakingdom-db.com/item/13154-giant-fish-bones)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Luminous Emerald x5](http://www.aurakingdom-db.com/item/10491-luminous-emerald)\n[• Ancient Amber x5](http://www.aurakingdom-db.com/item/10492-ancient-amber)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Navea Seasoned Skillet x1](http://www.aurakingdom-db.com/item/15239-navea-seasoned-skillet)\n[• Aromatic Spores x5](http://www.aurakingdom-db.com/item/11443-aromatic-spores)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Elite Guardian's Staff x1](http://www.aurakingdom-db.com/item/11263-elite-guardians-staff)\n[• Ironguard General's Pendant x1](http://www.aurakingdom-db.com/item/13457-ironguard-generals-pendant)\n[• Ironguard General's Ring x1](http://www.aurakingdom-db.com/item/13458-ironguard-generals-ring)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Otherworldly Coin x20](http://www.aurakingdom-db.com/item/13534-otherworldly-coin)\n[• Greater Elixir of Lightning x20](http://www.aurakingdom-db.com/item/14289-greater-elixir-of-lightning)\n[• Hero's Emblem x10](http://www.aurakingdom-db.com/item/11179-heros-emblem)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers merrilee",
  description: "merrilee prayers",
  execute(message, args) {
    embed.description = `${message.author} | Merilee's Prayers`;
    message.channel.send({ embed });
  }
};
