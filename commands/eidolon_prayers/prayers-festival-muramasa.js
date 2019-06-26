const embed = {
  description: "Festival Muramasa's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00077.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Isaias's Gift x1 - Note: Any](http://www.aurakingdom-db.com/item/11326-isaiass-gift)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Red Agate x5](http://www.aurakingdom-db.com/item/10489-red-agate)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Greater Stamina Potion x3](http://www.aurakingdom-db.com/item/12698-greater-stamina-potion)\n[• Greater Fortitude Potion x3](http://www.aurakingdom-db.com/item/12700-greater-fortitude-potion)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Frostfin Trout x3](http://www.aurakingdom-db.com/item/13073-frostfin-trout)\n[• Thornfang Fish x3](http://www.aurakingdom-db.com/item/14467-thornfang-fish)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Dark Beer x15](http://www.aurakingdom-db.com/item/11100-dark-beer)\n[• English Breakfast Tea x10](http://www.aurakingdom-db.com/item/11647-english-breakfast-tea)\n[• White Prayer Eggnog x5](http://www.aurakingdom-db.com/item/13878-white-prayer-eggnog)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Festival Muramasa's Key Fragment x5](http://www.aurakingdom-db.com/item/40896-festival-muramasas-key-fragment)\n[• Legendary Dream Brew x1](http://www.aurakingdom-db.com/item/15080-legendary-dream-brew)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers festival muramasa",
  description: "festival muramasa prayers",
  execute(message, args) {
    embed.description = `${message.author} | Festival Muramasa's Prayers`;
    message.channel.send({ embed });
  }
};
