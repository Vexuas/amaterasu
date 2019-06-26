const embed = {
  description: "Eirene's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00066.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Ghost Pepper x5](http://www.aurakingdom-db.com/item/11430-ghost-pepper)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Fresh Garlic Sprouts x10](http://www.aurakingdom-db.com/item/11461-fresh-garlic-sprouts)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Allie's Rejuvenation Gloves x1](http://www.aurakingdom-db.com/item/11976-allies-rejuvenation-gloves)\n[• Strategist's Ring x1](http://www.aurakingdom-db.com/item/11282-strategists-ring)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Glacial Moon x1](http://www.aurakingdom-db.com/item/14416-glacial-moon)\n[• Jade from the Deep x20](http://www.aurakingdom-db.com/item/10495-jade-from-the-deep)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Condensed Snowdrop Ice Cream x10](http://www.aurakingdom-db.com/item/13870-condensed-snowdrop-ice-cream)\n[• White Prayer Eggnog x10](http://www.aurakingdom-db.com/item/13878-white-prayer-eggnog)\n[• Sweet Flower Cake x10](http://www.aurakingdom-db.com/item/13846-sweet-flower-cake)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Eirene's Key Fragment x5](http://www.aurakingdom-db.com/item/40787-eirenes-key-fragment)\n[• Murfeo's Immortal Oath x1](http://www.aurakingdom-db.com/item/10386-murfeos-immortal-oath)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers eirene",
  description: "eirene prayers",
  execute(message, args) {
    embed.description = `${message.author} | Eirene's Prayers`;
    message.channel.send({ embed });
  }
};
