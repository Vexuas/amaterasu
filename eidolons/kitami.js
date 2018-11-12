const embed = {
  "title": "Kitami",
  "description": "Yes, she's a revered mystical beast called the God of Battle, but Kitami is actually quite shy. If she pushes past her shyness she can use monstrous strength to protect her friends. Her soul was stirred to action, and she joined the journeys of the Envoys of Gaia.\n\nKitami is dexterous and expertly slashes her claws in melee attacks. An adorable powerhouse, this Eidolon can use her paws to slash enemies and also to heal friends and restore power levels.\n[Artwork](https://www.facebook.com/AuraKingdom/posts/lets-celebrate-kitamis-arrivaltake-a-screenshot-of-your-character-wearing-its-mo/1647822461959833/)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511592245728903169/kitami-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Western Saury x2](http://www.aurakingdom-db.com/item/13045-western-saury)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Pearl of Light x15](http://www.aurakingdom-db.com/item/14245-pearl-of-light)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Katars of the Elite Guardian x1](http://www.aurakingdom-db.com/item/12382-katars-of-the-elite-guardian)\n   [• Ironguard General's Gauntlets x1](http://www.aurakingdom-db.com/item/13259-ironguard-generals-gauntlets)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Wild Bird Eggs x20](http://www.aurakingdom-db.com/item/11465-wild-bird-eggs)\n  [• Crimson Body x5](http://www.aurakingdom-db.com/item/14482-crimson-body)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Spicy Pickled Herring x10](http://www.aurakingdom-db.com/item/11631-spicy-pickled-herring)\n  [• Fish with Mushroom Sauce x10](http://www.aurakingdom-db.com/item/11551-fish-with-mushroom-sauce)\n  [• Gourmet Seafood Broth x10](http://www.aurakingdom-db.com/item/13842-gourmet-seafood-broth)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Kitami's Key Fragment x5](http://www.aurakingdom-db.com/item/40742-kitamis-key-fragment)\n  [• Top-Quality Energized Crystal x10](http://www.aurakingdom-db.com/item/14123-top-quality-energized-crystal)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'kitami',
  description: 'kitami prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};