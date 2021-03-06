const embed = {
  description: "Abraxas' Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00007.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Slighty Damaged Wisp x2](http://www.aurakingdom-db.com/item/14103-slighty-damaged-wisp)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Waterfall Catfish Mucus x1](http://www.aurakingdom-db.com/item/13184-waterfall-catfish-mucus)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Multigrain Toast x5](http://www.aurakingdom-db.com/item/11659-multigrain-toast)\n[• Premium Fried Milk Balls x5](http://www.aurakingdom-db.com/item/11626-premium-fried-milk-balls)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Aria Wrist Wraps x1](http://www.aurakingdom-db.com/item/10363-aria-wrist-wraps)\n[• Aria Ankle Boots x1](http://www.aurakingdom-db.com/item/10364-aria-ankle-boots)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Superior Stamina Potion x20](http://www.aurakingdom-db.com/item/12705-superior-stamina-potion)\n[• Superior Agility Potion x20](http://www.aurakingdom-db.com/item/12706-superior-agility-potion)\n[• Superior Fortitude Potion x20](http://www.aurakingdom-db.com/item/12707-superior-fortitude-potion)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Abraxas's Key Fragments x5](http://www.aurakingdom-db.com/item/11360-abraxass-key-fragments)\n[• Crimson Body x10](http://www.aurakingdom-db.com/item/14482-crimson-body)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers abraxas",
  description: "abraxas prayers",
  execute(message, args) {
    embed.description = `${message.author} | Abraxas' Prayers`;
    message.channel.send({ embed });
  }
};
