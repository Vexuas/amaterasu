const embed = {
  description: "Dante's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00050.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Kayel's Solar Core x1](http://www.aurakingdom-db.com/item/10355-kayels-solar-core)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Lava Alloy x3](http://www.aurakingdom-db.com/item/10500-lava-alloy)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Fight Club Prize (Elementary) x1 - Note: Any](http://www.aurakingdom-db.com/item/11967-fight-club-prize-elementary)\n[• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Fish with Mushroom Sauce x1](http://www.aurakingdom-db.com/item/11551-fish-with-mushroom-sauce)\n[• Provincial Mushroom Macaroni x10](http://www.aurakingdom-db.com/item/13833-provincial-mushroom-macaroni)\n[• Lightly Alcoholic Eggnog x10](http://www.aurakingdom-db.com/item/13877-lightly-alcoholic-eggnog)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Rampaging Ronin Armor x1](http://www.aurakingdom-db.com/item/14428-rampaging-ronin-armor)\n[• Ice Field Continent Turtle Armor x10](http://www.aurakingdom-db.com/item/14485-ice-field-continent-turtle-armor)\n[• Rampaging Ronin Helmet x1](http://www.aurakingdom-db.com/item/14427-rampaging-ronin-helmet)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Dante's Key Fragment x5](http://www.aurakingdom-db.com/item/40632-dantes-key-fragment)\n[• Crimson Tentacle x10](http://www.aurakingdom-db.com/item/14483-crimson-tentacle)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers dante",
  description: "dante prayers",
  execute(message, args) {
    embed.description = `${message.author} | Dante's Prayers`;
    message.channel.send({ embed });
  }
};
