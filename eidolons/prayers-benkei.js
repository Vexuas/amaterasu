const embed = {
  description: "Benkei's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00008.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Beer Cure x5](http://www.aurakingdom-db.com/item/11605-beer-cure)\n[• Scallop Muscle x5](http://www.aurakingdom-db.com/item/13816-scallop-muscle)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Fruit & Nut Cookies x5](http://www.aurakingdom-db.com/item/11528-fruit-nut-cookies)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Western Saury x3](http://www.aurakingdom-db.com/item/13045-western-saury)\n[• Eel x3](http://www.aurakingdom-db.com/item/13056-eel)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Top-Quality Phosphorus Crystal x3](http://www.aurakingdom-db.com/item/14398-top-quality-phosphorus-crystal)\n[• Top-Quality Energized Crystal x3](http://www.aurakingdom-db.com/item/14123-top-quality-energized-crystal)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Overlord's Tachi x1](http://www.aurakingdom-db.com/item/14960-overlords-tachi)\n[• Battleground Wargod's Breastplate x1](http://www.aurakingdom-db.com/item/15002-battleground-wargods-breastplate)\n[• Battleground Wargod's Bracelet x1](http://www.aurakingdom-db.com/item/15003-battleground-wargods-bracelet)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Benkei's Key Fragments x5](http://www.aurakingdom-db.com/item/11361-benkeis-key-fragments)\n[• Leo's Cloak of Kings x1](http://www.aurakingdom-db.com/item/11134-leos-cloak-of-kings)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers benkei",
  description: "benkei prayers",
  execute(message, args) {
    embed.description = `${message.author} | Benkei's Prayers`;
    message.channel.send({ embed });
  }
};
