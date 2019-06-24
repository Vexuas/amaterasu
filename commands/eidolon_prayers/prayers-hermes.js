const embed = {
  description: "Hermes' Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00069.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Bow of the Violet Maiden x1](http://www.aurakingdom-db.com/item/13368-bow-of-the-violet-maiden)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Fragrant Leaf Fruit Tea x10](http://www.aurakingdom-db.com/item/13865-fragrant-leaf-fruit-tea)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Flower Scented Butter Cake x10](http://www.aurakingdom-db.com/item/13845-flower-scented-butter-cake)\n[• Hibiscus Platter x10](http://www.aurakingdom-db.com/item/17141-hibiscus-platter)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Highlands Ghost Crab x10](http://www.aurakingdom-db.com/item/13072-highlands-ghost-crab)\n[• Crimson Wisp Jellyfish x1](http://www.aurakingdom-db.com/item/14471-crimson-wisp-jellyfish)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Fine Magic Crystal x5](http://www.aurakingdom-db.com/item/15577-fine-magic-crystal)\n[• Enhanced Strengthening Spanner x10](http://www.aurakingdom-db.com/item/12753-enhanced-strengthening-spanner)\n[• Enhanced Lightening Hammer x10](http://www.aurakingdom-db.com/item/12760-enhanced-lightening-hammer)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Hermes's Key fragment x5](http://www.aurakingdom-db.com/item/40813-hermess-key-fragment)\n[• Hurricane Wargod Boots x1](http://www.aurakingdom-db.com/item/15682-hurricane-wargod-boots)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers hermes",
  description: "hermes prayers",
  execute(message, args) {
    embed.description = `${message.author} | Hermes' Prayers`;
    message.channel.send({ embed });
  }
};
