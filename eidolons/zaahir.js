const embed = {
  "title": "Zaahir",
  "description": "A powerful efreet from the world of spirits, Zaahir gained notoriety among the djinn for his cunning, ruthlessness, and his ambition to rule. With his otherworldly savvy, he allies with those who, like him, will stop at nothing to achieve power.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Zaahir.jpg)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511438006482370560/zaahir-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Fearless Light Armor x1](http://www.aurakingdom-db.com/item/10344-fearless-light-armor)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Passionate Lover x2](http://www.aurakingdom-db.com/item/11587-passionate-lover)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Torian's Refined Kitchen Knife x1](http://www.aurakingdom-db.com/item/15243-torians-refined-kitchen-knife)\n   [• Sand-Vine Fruit x5](http://www.aurakingdom-db.com/item/11456-sand-vine-fruit)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Crystal Lobster Shell x3](http://www.aurakingdom-db.com/item/13174-crystal-lobster-shell)\n  [• Golden Lobster Claw x5](http://www.aurakingdom-db.com/item/13157-golden-lobster-claw)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Zaahir's Soul Orb x1](http://www.aurakingdom-db.com/item/12574-zaahirs-soul-orb)\n  [• Immortal Fire Crystal x5](http://www.aurakingdom-db.com/item/12577-immortal-fire-crystal)\n  [• Immaculate Secret Stone x10](http://www.aurakingdom-db.com/item/11033-immaculate-secret-stone)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Zaahir's Key Fragments x5](http://www.aurakingdom-db.com/item/11375-zaahirs-key-fragments)\n  [• Daisy's Robes of the Fiery Soul x1](http://www.aurakingdom-db.com/item/11317-daisys-robes-of-the-fiery-soul)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'zaahir',
  description: 'zaahir prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};