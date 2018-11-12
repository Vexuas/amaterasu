const embed = {
  "title": "Aelius",
  "description": "A mysterious hooded knight emblazoned with the sun's crest, Aelius brings to bear his shining power to defend his allies with shields of pure light and incinerate the enemies before him with prominences of intense solar heat.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Aelius_3-star-whiteday.jpg)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511393345332051968/aelius-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Blood Coral x2](http://www.aurakingdom-db.com/item/10493-blood-coral)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Rainbow Fruit x2](http://www.aurakingdom-db.com/item/11429-rainbow-fruit)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Penguin Bandit's Jacket x1](http://www.aurakingdom-db.com/item/12979-penguin-bandits-jacket)\n   [• Fig x5](http://www.aurakingdom-db.com/item/13017-fig)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Lunar Helmet Core x1](http://www.aurakingdom-db.com/item/10519-lunar-helmet-core)\n  [• Lunar Armor Core x1](http://www.aurakingdom-db.com/item/10520-lunar-armor-core)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Ancient Glimmering Fossil x3](http://www.aurakingdom-db.com/item/12554-ancient-glimmering-fossil)\n  [• Elixir of Ice x10](http://www.aurakingdom-db.com/item/12709-elixir-of-ice)\n  [• Sea of Thoughts x1](http://www.aurakingdom-db.com/item/13298-sea-of-thoughts)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Aelius's Key Fragments x5](http://www.aurakingdom-db.com/item/11359-aeliuss-key-fragments)\n  [• Top-Quality Energized Crystal x25](http://www.aurakingdom-db.com/item/14123-top-quality-energized-crystal)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'aelius',
  description: 'aelius prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};