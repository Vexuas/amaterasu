const embed = {
  description: "Aelius' Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00006.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Blood Coral x2](http://www.aurakingdom-db.com/item/10493-blood-coral)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Rainbow Fruit x2](http://www.aurakingdom-db.com/item/11429-rainbow-fruit)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Penguin Bandit's Jacket x1](http://www.aurakingdom-db.com/item/12979-penguin-bandits-jacket)\n[• Fig x5](http://www.aurakingdom-db.com/item/13017-fig)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Lunar Helmet Core x1](http://www.aurakingdom-db.com/item/10519-lunar-helmet-core)\n[• Lunar Armor Core x1](http://www.aurakingdom-db.com/item/10520-lunar-armor-core)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Ancient Glimmering Fossil x3](http://www.aurakingdom-db.com/item/12554-ancient-glimmering-fossil)\n[• Elixir of Ice x10](http://www.aurakingdom-db.com/item/12709-elixir-of-ice)\n[• Sea of Thoughts x1](http://www.aurakingdom-db.com/item/13298-sea-of-thoughts)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Aelius's Key Fragments x5](http://www.aurakingdom-db.com/item/11359-aeliuss-key-fragments)\n[• Top-Quality Energized Crystal x25](http://www.aurakingdom-db.com/item/14123-top-quality-energized-crystal)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers aelius",
  description: "aelius prayers",
  execute(message, args) {
    embed.description = `${message.author} | Aelius' Prayers`;
    message.channel.send({ embed });
  }
};
