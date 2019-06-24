const embed = {
  description: "Zephyrine's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00049.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Edward's Gift x1](http://www.aurakingdom-db.com/item/11327-edwards-gift)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Amethyst x5](http://www.aurakingdom-db.com/item/10488-amethyst)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Luminous Emerald x10](http://www.aurakingdom-db.com/item/10491-luminous-emerald)\n[• Reinforcing Metal Plate x10](http://www.aurakingdom-db.com/item/12744-reinforcing-metal-plate)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Gourmet Seafood Broth x10](http://www.aurakingdom-db.com/item/13842-gourmet-seafood-broth)\n[• Vanilla Seasoned Beef Broth x10](http://www.aurakingdom-db.com/item/13848-vanilla-seasoned-beef-broth)\n[• Gourmet Honey Glazed Pork Cutlet x10](http://www.aurakingdom-db.com/item/13837-gourmet-honey-glazed-pork-cutlet)"
    },
    {
      name: "5th Wish",
      value:
        "[• Elite Guardian's Harp x1](http://www.aurakingdom-db.com/item/11267-elite-guardians-harp)\n[• Talamund's Soul x1](http://www.aurakingdom-db.com/item/10388-talamunds-soul)\n[• Black Knight's Promissory Breastpin x1](http://www.aurakingdom-db.com/item/14967-black-knights-promissory-breastpin)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Zephyrine's Key Fragments x5](http://www.aurakingdom-db.com/item/40629-zephyrines-key-fragments)\n[• Top-Quality Wisp x15](http://www.aurakingdom-db.com/item/14125-top-quality-wisp)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers zephyrine",
  description: "zephyrine prayers",
  execute(message, args) {
    embed.description = `${message.author} | Zephyrine's Prayers`;
    message.channel.send({ embed });
  }
};
