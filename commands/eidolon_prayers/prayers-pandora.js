const embed = {
  description: "Pandora's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00056.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Multicolored Water Mushroom x5](http://www.aurakingdom-db.com/item/11444-multicolored-water-mushroom)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Sharp Fang x1](http://www.aurakingdom-db.com/item/11054-sharp-fang)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Allie's Rejuvenation Gloves x1](http://www.aurakingdom-db.com/item/11976-allies-rejuvenation-gloves)\n[• Cruel Tyrant's Blades x1](http://www.aurakingdom-db.com/item/11252-cruel-tyrants-blades)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Phantom Rose x1](http://www.aurakingdom-db.com/item/14415-phantom-rose)\n[• Rosegold Powder x20](http://www.aurakingdom-db.com/item/10499-rosegold-powder)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Traditional Beef Broth x10](http://www.aurakingdom-db.com/item/13850-traditional-beef-broth)\n[• Gourmet Seafood Broth x10](http://www.aurakingdom-db.com/item/13842-gourmet-seafood-broth)\n[• Filet Mignon x10](http://www.aurakingdom-db.com/item/11643-filet-mignon)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Pandora's Key Fragment x5](http://www.aurakingdom-db.com/item/40735-pandoras-key-fragment)\n[• Murfeo's Immortal Oath x1](http://www.aurakingdom-db.com/item/10386-murfeos-immortal-oath)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers pandora",
  description: "pandora prayers",
  execute(message, args) {
    embed.description = `${message.author} | Pandora's Prayers`;
    message.channel.send({ embed });
  }
};
