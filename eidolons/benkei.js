const embed = {
  "title": "Benkei",
  "description": "Wanderer of all realms and planes, Benkei's flamboyant appearance belies his role as a protector in matters of the spirit world. From bodyguard to siege-breaker, he mounts a powerful offense from a bracing defense, and has recently added humans to his clientele.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Higa.jpg)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511399173799804929/benkei-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Beer Cure x5](http://www.aurakingdom-db.com/item/11605-beer-cure)\n   [• Scallop Muscle x5](http://www.aurakingdom-db.com/item/13816-scallop-muscle)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Fruit & Nut Cookies x5](http://www.aurakingdom-db.com/item/11528-fruit-nut-cookies)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Western Saury x3](http://www.aurakingdom-db.com/item/13045-western-saury)\n   [• Eel x3](http://www.aurakingdom-db.com/item/13056-eel)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Top-Quality Phosphorus Crystal x3](http://www.aurakingdom-db.com/item/14398-top-quality-phosphorus-crystal)\n  [• Top-Quality Energized Crystal x3](http://www.aurakingdom-db.com/item/14123-top-quality-energized-crystal)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Overlord's Tachi x1](http://www.aurakingdom-db.com/item/14960-overlords-tachi)\n  [• Battleground Wargod's Breastplate x1](http://www.aurakingdom-db.com/item/15002-battleground-wargods-breastplate)\n  [• Battleground Wargod's Bracelet x1](http://www.aurakingdom-db.com/item/15003-battleground-wargods-bracelet)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Benkei's Key Fragments x5](http://www.aurakingdom-db.com/item/11361-benkeis-key-fragments)\n  [• Leo's Cloak of Kings x1](http://www.aurakingdom-db.com/item/11134-leos-cloak-of-kings)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'benkei',
  description: 'benkei prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};