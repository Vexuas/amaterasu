const embed = {
  description: "Nazrudin's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00018.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Obsidian Kitchen Set x1](http://www.aurakingdom-db.com/item/15238-obsidian-kitchen-set)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Peanut Cookies x2](http://www.aurakingdom-db.com/item/11529-peanut-cookies)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Mythical Angler Helm x1](http://www.aurakingdom-db.com/item/12938-mythical-angler-helm)\n[• Mythical Angler Coat x1](http://www.aurakingdom-db.com/item/12939-mythical-angler-coat)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Well Preserved Chinaware x5](http://www.aurakingdom-db.com/item/14105-well-preserved-chinaware)\n[• Flawless Secret Stone x5](http://www.aurakingdom-db.com/item/11032-flawless-secret-stone)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Revelation Gauntlets x1](http://www.aurakingdom-db.com/item/10376-revelation-gauntlets)\n[• Revelation Long Boots x1](http://www.aurakingdom-db.com/item/10377-revelation-long-boots)\n[• Revelation Belt x1](http://www.aurakingdom-db.com/item/10378-revelation-belt)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Nazrudin's Key Fragments x5](http://www.aurakingdom-db.com/item/11371-nazrudins-key-fragments)\n[• Nazrudin's Gem x1](http://www.aurakingdom-db.com/item/13295-nazrudins-gem)\n[•  Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers nazrudin",
  description: "nazrudin prayers",
  execute(message, args) {
    embed.description = `${message.author} | Nazrudin's Prayers`;
    message.channel.send({ embed });
  }
};
