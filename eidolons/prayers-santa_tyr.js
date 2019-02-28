const embed = {
  description: "Santa Tyr's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00074.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Chain of Rebirth x1](http://www.aurakingdom-db.com/item/11052-chain-of-rebirth)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Highland Wheat Flour x2](http://www.aurakingdom-db.com/item/11459-highland-wheat-flour)",
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
        "[• Great General's Cloak x1](http://www.aurakingdom-db.com/item/11275-great-generals-cloak)\n[• Strategist's Belt x1](http://www.aurakingdom-db.com/item/11280-strategists-belt)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Imperial Feather x1](http://www.aurakingdom-db.com/item/12566-imperial-feather)\n[• Reinforcing Cutter x5](http://www.aurakingdom-db.com/item/13888-reinforcing-cutter)\n[• Agile Grinding Wheel x5](http://www.aurakingdom-db.com/item/12751-agile-grinding-wheel)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Santa Tyr's Key fragment x5](http://www.aurakingdom-db.com/item/40889-santa-tyrs-key-fragment)\n[• Helakar's Band of Loyalty x1](http://www.aurakingdom-db.com/item/12463-helakars-band-of-loyalty)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers santa tyr",
  description: "santa tyr prayers",
  execute(message, args) {
    embed.description = `${message.author} | Santa Tyr's Prayers`;
    message.channel.send({ embed });
  }
};
