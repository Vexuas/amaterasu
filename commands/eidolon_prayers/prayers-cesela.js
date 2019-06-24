const embed = {
  description: "Cesela's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00041.jpg"
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
        "[• Reinforcing Grinding Wheel x1](http://www.aurakingdom-db.com/item/12745-reinforcing-grinding-wheel)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Freshly Caught Fish x5](http://www.aurakingdom-db.com/item/11629-freshly-caught-fish)\n[• Autumn Oolong Tea x5](http://www.aurakingdom-db.com/item/11654-autumn-oolong-tea)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Requiem Wristguards x1](http://www.aurakingdom-db.com/item/10358-requiem-wristguards)\n[• Requiem Leggings x1](http://www.aurakingdom-db.com/item/10359-requiem-leggings)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Helakar's Broken Spirit x1](http://www.aurakingdom-db.com/item/12529-helakars-broken-spirit)\n[• Top-Quality Fallenwisp x5](http://www.aurakingdom-db.com/item/14401-top-quality-fallenwisp)\n[• Elixir of Darkness x20](http://www.aurakingdom-db.com/item/12713-elixir-of-darkness)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Cesela's Key Fragments x5](http://www.aurakingdom-db.com/item/40392-ceselas-key-fragments)\n[• Garrin's Will x1](http://www.aurakingdom-db.com/item/11982-garrins-will)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers cesela",
  description: "cesela prayers",
  execute(message, args) {
    embed.description = `${message.author} | Cesela's Prayers`;
    message.channel.send({ embed });
  }
};
