const embed = {
  description: "Zaahir's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00022.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Fearless Light Armor x1](http://www.aurakingdom-db.com/item/10344-fearless-light-armor)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Passionate Lover x2](http://www.aurakingdom-db.com/item/11587-passionate-lover)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Torian's Refined Kitchen Knife x1](http://www.aurakingdom-db.com/item/15243-torians-refined-kitchen-knife)\n[• Sand-Vine Fruit x5](http://www.aurakingdom-db.com/item/11456-sand-vine-fruit)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Crystal Lobster Shell x3](http://www.aurakingdom-db.com/item/13174-crystal-lobster-shell)\n[• Golden Lobster Claw x5](http://www.aurakingdom-db.com/item/13157-golden-lobster-claw)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Zaahir's Soul Orb x1](http://www.aurakingdom-db.com/item/12574-zaahirs-soul-orb)\n[• Immortal Fire Crystal x5](http://www.aurakingdom-db.com/item/12577-immortal-fire-crystal)\n[• Immaculate Secret Stone x10](http://www.aurakingdom-db.com/item/11033-immaculate-secret-stone)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Zaahir's Key Fragments x5](http://www.aurakingdom-db.com/item/11375-zaahirs-key-fragments)\n[• Daisy's Robes of the Fiery Soul x1](http://www.aurakingdom-db.com/item/11317-daisys-robes-of-the-fiery-soul)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers zaahir",
  description: "zaahir prayers",
  execute(message, args) {
    embed.description = `${message.author} | Zaahir's Prayers`;
    message.channel.send({ embed });
  }
};
