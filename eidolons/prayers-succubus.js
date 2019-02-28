const embed = {
  description: "Succubus' Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00070.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Flower Petal x10](http://www.aurakingdom-db.com/item/13018-flower-petal)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Passionate Lover x3](http://www.aurakingdom-db.com/item/11587-passionate-lover)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Blood Coral x20](http://www.aurakingdom-db.com/item/10493-blood-coral)\n[• Hands of Shadow x5](http://www.aurakingdom-db.com/item/12715-hands-of-shadow)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Gladiator's Coat x1](http://www.aurakingdom-db.com/item/11290-gladiators-coat)\n[• Gladiator's Cap x1](http://www.aurakingdom-db.com/item/11289-gladiators-cap)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Superior Stamina Potion x20](http://www.aurakingdom-db.com/item/12705-superior-stamina-potion)\n[• Well Preserved Fallenwisp x15](http://www.aurakingdom-db.com/item/14389-well-preserved-fallenwisp)\n[• Magically Concentrated Catalyst x10](http://www.aurakingdom-db.com/item/12557-magically-concentrated-catalyst)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Succubus' Key Fragment x5](http://www.aurakingdom-db.com/item/40839-succubus-key-fragment)\n[• Reid's Soul Seeking Harp x1](http://www.aurakingdom-db.com/item/11305-reids-soul-seeking-harp)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers succubus",
  description: "succubus prayers",
  execute(message, args) {
    embed.description = `${message.author} | Succubus' Prayers`;
    message.channel.send({ embed });
  }
};
