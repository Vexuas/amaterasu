const embed = {
  "title": "Yarnaros",
  "description": "Once a warlord, Yarnaros was cursed with a draconian form. Resisting the anger in his heart, he instead championed the weak and subdued demons, until at last the gods lifted him up, giving him golden wings and the power to shake the earth and sky.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Yarnaros_3_Star.jpg)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511431205569167360/yarnaros-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Professional Stone Fishing Rod x1](http://www.aurakingdom-db.com/item/12788-professional-stone-fishing-rod)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Noripan's Emerald Leaf x1](http://www.aurakingdom-db.com/item/10353-noripans-emerald-leaf)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Refined Targeting Core x1](http://www.aurakingdom-db.com/item/10517-refined-targeting-core)\n   [• Sharpening Spanner x3](http://www.aurakingdom-db.com/item/12738-sharpening-spanner)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Grandma's Greens x5](http://www.aurakingdom-db.com/item/11634-grandmas-greens)\n  [• Garlic Steamed Veggies x5](http://www.aurakingdom-db.com/item/11633-garlic-steamed-veggies)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Top-Class Seafood and Greens Teppanyaki x1](http://www.aurakingdom-db.com/item/13874-top-class-seafood-and-greens-teppanyaki)\n  [• Sweet Snowdrop Ice Cream x1](http://www.aurakingdom-db.com/item/13868-sweet-snowdrop-ice-cream)\n  [• Exquisite Honey Nut Drink x1](http://www.aurakingdom-db.com/item/13862-exquisite-honey-nut-drink)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Yarnaros's Key Fragments x5](http://www.aurakingdom-db.com/item/11372-yarnaross-key-fragments)\n  [• Talamund's Final Breath x1](http://www.aurakingdom-db.com/item/12533-talamunds-final-breath)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'yarnaros',
  description: 'yarnaros prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};