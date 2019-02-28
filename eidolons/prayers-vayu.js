const embed = {
  description: "Vayu's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00017.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Slighty Damaged Rare Mineral x2](http://www.aurakingdom-db.com/item/14104-slighty-damaged-rare-mineral)",
      inline: true
    },
    {
      name: "2nd Wish",
      value: "[• Icy Fin x2](http://www.aurakingdom-db.com/item/13163-icy-fin)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Asheara's Magicked Scale x1](http://www.aurakingdom-db.com/item/10368-ashearas-magicked-scale)\n[• Runed Bloodgem x1](http://www.aurakingdom-db.com/item/11055-runed-bloodgem)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Isaias's Gift x1 - Note: Any](http://www.aurakingdom-db.com/item/11326-isaiass-gift)\n[• Dimensional Hall Reward (Level 20) x1 - Note: Any](http://www.aurakingdom-db.com/item/11666-dimensional-hall-reward-level-20)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Flaming Kitchen Set x1](http://www.aurakingdom-db.com/item/15245-flaming-kitchen-set)\n[• Giant Mushroom x20](http://www.aurakingdom-db.com/item/14613-giant-mushroom)\n[• Gourmet Tomato and Mushroom Noodles x20](http://www.aurakingdom-db.com/item/13834-gourmet-tomato-and-mushroom-noodles)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Vayu's Key Fragments x5](http://www.aurakingdom-db.com/item/11370-vayus-key-fragments)\n[• Warrior's Soul x25](http://www.aurakingdom-db.com/item/12720-warriors-soul)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers vayu",
  description: "vayu prayers",
  execute(message, args) {
    embed.description = `${message.author} | Vayu's Prayers`;
    message.channel.send({ embed });
  }
};
