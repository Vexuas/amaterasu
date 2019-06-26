const embed = {
  description: "Tsubaki's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00027.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Tiger Leaf Powder x2](http://www.aurakingdom-db.com/item/11437-tiger-leaf-powder)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Refined Falcon Core x1](http://www.aurakingdom-db.com/item/10508-refined-falcon-core)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Navea Chef's Knife x1](http://www.aurakingdom-db.com/item/15240-navea-chefs-knife)\n[• Poison Frog x5](http://www.aurakingdom-db.com/item/14463-poison-frog)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Greater Swiftness Potion x5](http://www.aurakingdom-db.com/item/12697-greater-swiftness-potion)\n[• Aromatic Spores x5](http://www.aurakingdom-db.com/item/11443-aromatic-spores)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Hood of the Devourer x1](http://www.aurakingdom-db.com/item/10379-hood-of-the-devourer)\n[• Coat of the Devourer x1](http://www.aurakingdom-db.com/item/10380-coat-of-the-devourer)\n[• Plumed Ring x1](http://www.aurakingdom-db.com/item/11056-plumed-ring)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Tsubaki's Key Fragments x5](http://www.aurakingdom-db.com/item/11380-tsubakis-key-fragments)\n[• Greater Elixir of Dark x25](http://www.aurakingdom-db.com/item/14292-greater-elixir-of-dark)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers tsubaki",
  description: "tsubaki prayers",
  execute(message, args) {
    embed.description = `${message.author} | Tsubaki's Prayers`;
    message.channel.send({ embed });
  }
};
