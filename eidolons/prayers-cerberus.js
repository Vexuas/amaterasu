const embed = {
  description: "Cerberus' Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00071.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Elixir of Flame x2](http://www.aurakingdom-db.com/item/12708-elixir-of-flame)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Well Preserved Mutant Remains x2](http://www.aurakingdom-db.com/item/14390-well-preserved-mutant-remains)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Fresh Sirloin x5](http://www.aurakingdom-db.com/item/14452-fresh-sirloin)\n[• Daze Rod x1](http://www.aurakingdom-db.com/item/12810-daze-rod)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Warrior's Light Armor x1](http://www.aurakingdom-db.com/item/11285-warriors-light-armor)\n[• Strategist's Cape x1](http://www.aurakingdom-db.com/item/11283-strategists-cape)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Chef's Special Vanilla Fried Pork Cutlet x10](http://www.aurakingdom-db.com/item/13838-chefs-special-vanilla-fried-pork-cutlet)\n[• Top-Class Seafood and Greens Teppanyaki x10](http://www.aurakingdom-db.com/item/13874-top-class-seafood-and-greens-teppanyaki)\n[• Stellar Corn Salad Wrap x10](http://www.aurakingdom-db.com/item/13858-stellar-corn-salad-wrap)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Cerberus' Key Fragment x5](http://www.aurakingdom-db.com/item/40852-cerberus-key-fragment)\n[• Grass Kingdom Hero's Belt x1](http://www.aurakingdom-db.com/item/11320-grass-kingdom-heros-belt)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers cerberus",
  description: "cerberus prayers",
  execute(message, args) {
    embed.description = `${message.author} | Cerberus' Prayers`;
    message.channel.send({ embed });
  }
};
