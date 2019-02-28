const embed = {
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00021.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Silver Star Stone x2](http://www.aurakingdom-db.com/item/10480-silver-star-stone)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Chain of Rebirth x1](http://www.aurakingdom-db.com/item/11052-chain-of-rebirth)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Chopped Nuts x5](http://www.aurakingdom-db.com/item/11434-chopped-nuts)\n[• Live Marsh Waterweed x5](http://www.aurakingdom-db.com/item/13180-live-marsh-waterweed)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Great General's Pendant x1](http://www.aurakingdom-db.com/item/11273-great-generals-pendant)\n[• Great General's Ring x1](http://www.aurakingdom-db.com/item/11274-great-generals-ring)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Giant Marsh Trout x1](http://www.aurakingdom-db.com/item/13083-giant-marsh-trout)\n[• Frostfin Trout x10](http://www.aurakingdom-db.com/item/13073-frostfin-trout)\n[• Bass x50](http://www.aurakingdom-db.com/item/13054-bass)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Quelkulan's Key Fragments x5](http://www.aurakingdom-db.com/item/11374-quelkulans-key-fragments)\n[• Top-Quality Mutant Remains x25](http://www.aurakingdom-db.com/item/14402-top-quality-mutant-remains)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers quelkulan",
  description: "quelkulan prayers",
  execute(message, args) {
    embed.description = `${message.author} | Quelkulan's Prayers`;
    message.channel.send({ embed });
  }
};
