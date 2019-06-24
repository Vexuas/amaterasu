const embed = {
  description: "Hansel and Gretel's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00040.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Strawberry Cake x2](http://www.aurakingdom-db.com/item/11576-strawberry-cake)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Ambusher Ankle Boots x1](http://www.aurakingdom-db.com/item/10351-ambusher-ankle-boots)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Vanilla Macaron x5](http://www.aurakingdom-db.com/item/11552-vanilla-macaron)\n[• Egg Nog with Cinnamon x5](http://www.aurakingdom-db.com/item/11661-egg-nog-with-cinnamon)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Deep Sea Faceguard x1](http://www.aurakingdom-db.com/item/12958-deep-sea-faceguard)\n[• Deep Sea Hauberk x1](http://www.aurakingdom-db.com/item/12959-deep-sea-hauberk)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• White Prayer Eggnog x20](http://www.aurakingdom-db.com/item/13878-white-prayer-eggnog)\n[• Rainbow Colored Shards x5](http://www.aurakingdom-db.com/item/12555-rainbow-colored-shards)\n[• Dispelling Potion x20](http://www.aurakingdom-db.com/item/12718-dispelling-potion)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Hansel and Gretel's Key Fragment x5](http://www.aurakingdom-db.com/item/40390-hansel-and-gretels-key-fragment)\n[• Otherworldly Coin x10](http://www.aurakingdom-db.com/item/13534-otherworldly-coin)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: "prayers hansel and gretel",
  description: "hansel prayers",
  execute(message, args) {
    embed.description = `${message.author} | Hansel & Gretel's Prayers`;
    message.channel.send({ embed });
  }
};
