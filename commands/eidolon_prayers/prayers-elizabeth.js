const embed = {
  description: "Elizabeth's Prayers",
  color: 1493680,
  thumbnail: {
    url: 'http://cdn.aurakingdom-db.com/images/icons/P00078.jpg'
  },
  fields: [
    {
      name: '1st Wish',
      value:
        '[• Flower Petal x10](http://www.aurakingdom-db.com/item/13018-flower-petal)',
      inline: true
    },
    {
      name: '2nd Wish',
      value:
        '[• Post Dinner Scotch x2](http://www.aurakingdom-db.com/item/11645-post-dinner-scotch)',
      inline: true
    },
    {
      name: '3rd Wish',
      value:
        '[• Aria Sash x1](http://www.aurakingdom-db.com/item/10365-aria-sash)\n[• Aria Wrist Wraps x1](http://www.aurakingdom-db.com/item/10363-aria-wrist-wraps)',
      inline: true
    },
    {
      name: '4th Wish',
      value:
        '[• Sharpening Spanner x5](http://www.aurakingdom-db.com/item/12738-sharpening-spanner)\n[• Reinforcing Pliers x3](http://www.aurakingdom-db.com/item/12746-reinforcing-pliers)',
      inline: true
    },
    {
      name: '5th Wish',
      value:
        '[• Top-Quality Radioactive Stone x5](http://www.aurakingdom-db.com/item/14399-top-quality-radioactive-stone)\n[• Top-Quality Treasure x5](http://www.aurakingdom-db.com/item/14124-top-quality-treasure)\n[• Top-Quality Animal Bones x5](http://www.aurakingdom-db.com/item/14121-top-quality-animal-bones)',
      inline: true
    },
    {
      name: '6th Wish',
      value:
        "[• Elizabeth's Key Fragment x5](http://www.aurakingdom-db.com/item/40909-elizabeths-key-fragment)\n[• Sage Stone x40](http://www.aurakingdom-db.com/item/15015-sage-stone)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: 'prayers elizabeth',
  description: 'elizabeth prayers',
  execute(message, args) {
    embed.description = `${message.author} | Elizabeth's Prayers`;
    message.channel.send({ embed });
  }
};
