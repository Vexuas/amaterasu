const embed = {
  "title": "Ghodroon",
  "description": "Dwelling in magmatic caverns far beneath the world's surface, the great dragon Ghodroon has the power to sear foes with boiling lava and superheated ash. He has a fondness for gems and precious metals, and will begrudgingly work with select humans to increase his hoard.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Ghodroon.jpg)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511433013083766784/ghodroon-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Sea Bream x1](http://www.aurakingdom-db.com/item/13053-sea-bream)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Classic Angler's Shoes x1](http://www.aurakingdom-db.com/item/12913-classic-anglers-shoes)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Electrochemical Alloy x1](http://www.aurakingdom-db.com/item/10504-electrochemical-alloy)\n   [• Magical Force Alloy x1](http://www.aurakingdom-db.com/item/10505-magical-force-alloy)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Sweet and Sour Fish x5](http://www.aurakingdom-db.com/item/11630-sweet-and-sour-fish)\n  [• Tender Steak x10](http://www.aurakingdom-db.com/item/11641-tender-steak)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Well Preserved Radioactive Stone x5](http://www.aurakingdom-db.com/item/14387-well-preserved-radioactive-stone)\n  [• Asheara's Pearl of Wisdom x1](http://www.aurakingdom-db.com/item/12524-ashearas-pearl-of-wisdom)\n  [• Talen's Bloodthirsty Gem x1](http://www.aurakingdom-db.com/item/10385-talens-bloodthirsty-gem)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Ghodroon's Key Fragments x5](http://www.aurakingdom-db.com/item/11373-ghodroons-key-fragments)\n  [• Top-Quality Rare Mineral x15](http://www.aurakingdom-db.com/item/14126-top-quality-rare-mineral)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'ghodroon',
  description: 'ghodroon prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};