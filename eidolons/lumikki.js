const embed = {
  "title": "Lumikki",
  "description": "Lumikki has always yearned for a simple, happy life. With help from the Power of Gaia, she's come to the world of Aura Kingdom to pursue her dream. She's ecstatic about all the Envoys of Gaia available to keep her company.\n\nBlessed by the gods of winter and born from the purest snow, Lumikki wields the power of cold to freeze her enemies, leaving them vulnerable to attacks. She also has the power to inspire her allies, increasing their battle prowess. Whether attacking or supporting from afar, she's a well-balanced addition to any fight.\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/615964/mystery-box-lumikki)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511584621134086144/lumikki-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Crimson Eggs x10](http://www.aurakingdom-db.com/item/11435-crimson-eggs)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Eternal Blood Vine Flower x20](http://www.aurakingdom-db.com/item/10497-eternal-blood-vine-flower)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Salad du Jour x10](http://www.aurakingdom-db.com/item/11599-salad-du-jour)\n   [• Longevity Drink x5](http://www.aurakingdom-db.com/item/11591-longevity-drink)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Strategist's Cap x1](http://www.aurakingdom-db.com/item/11276-strategists-cap)\n  [• Strategist's Coat x1](http://www.aurakingdom-db.com/item/11277-strategists-coat)\n  [• Cruel Tyrant's Tachi x1](http://www.aurakingdom-db.com/item/13617-cruel-tyrants-tachi)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Enhanced Reinforcing Cutter x10](http://www.aurakingdom-db.com/item/13906-enhanced-reinforcing-cutter)\n  [• Saint Hale's Broken Horn x1](http://www.aurakingdom-db.com/item/12532-saint-hales-broken-horn)\n  [• Gladiator's Feather x5](http://www.aurakingdom-db.com/item/12556-gladiators-feather)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Lumikki's Key Fragment x5](http://www.aurakingdom-db.com/item/40715-lumikkis-key-fragment)\n  [• Greater Elixir of Ice x15](http://www.aurakingdom-db.com/item/14288-greater-elixir-of-ice)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'lumikki',
  description: 'lumikki prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};