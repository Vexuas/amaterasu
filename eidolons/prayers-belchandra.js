const embed = {
  description: "Bel-Chandra's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00016.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Red Leech x2](http://www.aurakingdom-db.com/item/13022-red-leech)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Strong Iced Tea x2](http://www.aurakingdom-db.com/item/11542-strong-iced-tea)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Noble's Fishing Hat x1](http://www.aurakingdom-db.com/item/12918-nobles-fishing-hat)\n[• Noble's Fishing Vest x1](http://www.aurakingdom-db.com/item/12919-nobles-fishing-vest)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Hypnosis Powder x1](http://www.aurakingdom-db.com/item/14477-hypnosis-powder)\n[• Navea Special Roast Tea x5](http://www.aurakingdom-db.com/item/11106-navea-special-roast-tea)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Battlefield Amulet x1](http://www.aurakingdom-db.com/item/13460-battlefield-amulet)\n[• Battlefield Band x1](http://www.aurakingdom-db.com/item/13461-battlefield-band)\n[• Battlefield Cape x1](http://www.aurakingdom-db.com/item/13462-battlefield-cape)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Bel-Chandra's Key Fragments x5](http://www.aurakingdom-db.com/item/11369-bel-chandras-key-fragments)\n[• Top-Quality Corroded Ore x25](http://www.aurakingdom-db.com/item/14400-top-quality-corroded-ore)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers bel-chandra",
  description: "bel-chandra prayers",
  execute(message, args) {
    embed.description = `${message.author} | Bel-Chandra's Prayers`;
    message.channel.send({ embed });
  }
};
