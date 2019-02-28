const embed = {
  description: "Cleopawtra's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00028.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Western Saury x2](http://www.aurakingdom-db.com/item/13045-western-saury)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Sugary Soda x2](http://www.aurakingdom-db.com/item/11583-sugary-soda)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Soul of the Sands x1](http://www.aurakingdom-db.com/item/12559-soul-of-the-sands)\n[• Well Preserved Animal Bones x5](http://www.aurakingdom-db.com/item/14110-well-preserved-animal-bones)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Strategist's Choker x1](http://www.aurakingdom-db.com/item/11281-strategists-choker)\n[• Strategist's Ring x1](http://www.aurakingdom-db.com/item/11282-strategists-ring)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Malachite Karma Bead x1](http://www.aurakingdom-db.com/item/11053-malachite-karma-bead)\n[• Stardust Flower x20](http://www.aurakingdom-db.com/item/11442-stardust-flower)\n[• Rosegold Powder x50](http://www.aurakingdom-db.com/item/10499-rosegold-powder)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Cleopawtra's Key Fragments x5](http://www.aurakingdom-db.com/item/11381-cleopawtras-key-fragments)\n[• Peerless Agility Potion x25](http://www.aurakingdom-db.com/item/14285-peerless-agility-potion)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers cleopawtra",
  description: "cleopawtra prayers",
  execute(message, args) {
    embed.description = `${message.author} | Cleopawtra's Prayers`;
    message.channel.send({ embed });
  }
};
