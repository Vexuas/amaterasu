const embed = {
  "title": "Amaterasu",
  "description": "Amaterasu, the daimyojin who helped to create the world, is a powerful and resplendent goddess bestowed with the great Power of the Oracle. Amaterasu will aid any person named by the oracle, harnessing the energy of the sun to protect the figure of prophecy.\n\nIn battle, Amaterasu unleashes blinding beams of light which serve to noth dispel the darkness and deflect attacks. She also possesses benevolent powers of healing, which she uses to assist her companions when necessary. With Amaterasu by your side, surely even the most powerful of enemies will be vanquished.\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/512180/amaterasu-039-s-key-fragment-40)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511535058440552468/amaterasu-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Fluorescent Streamlined Fishing Rod x1](http://www.aurakingdom-db.com/item/12790-fluorescent-streamlined-fishing-rod)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Ritual Armor Core x1](http://www.aurakingdom-db.com/item/10511-ritual-armor-core)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Requiem Sash x1](http://www.aurakingdom-db.com/item/10360-requiem-sash)\n   [• Cruel Tyrant's Heavy Axe x1](http://www.aurakingdom-db.com/item/11254-cruel-tyrants-heavy-axe)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Broiled Fish Fillet x5](http://www.aurakingdom-db.com/item/11549-broiled-fish-fillet)\n  [• Mysterious Nocturne x5](http://www.aurakingdom-db.com/item/11566-mysterious-nocturne)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Heart of the Marsh x5](http://www.aurakingdom-db.com/item/12553-heart-of-the-marsh)\n  [• Fusion Formula: Zaahir's Meteoric Shock x1](http://www.aurakingdom-db.com/item/12507-fusion-formula-zaahirs-meteoric-shock)\n  [• Stalwart Iron Cutter x10](http://www.aurakingdom-db.com/item/13891-stalwart-iron-cutter)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Amaterasu's Key Fragment x5](http://www.aurakingdom-db.com/item/40572-amaterasus-key-fragment)\n  [• Greater Elixir of Holy Light x40](http://www.aurakingdom-db.com/item/14291-greater-elixir-of-holy-light)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'amaterasu',
  description: 'amaterasu prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};