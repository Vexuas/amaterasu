const embed = {
  "title": "Tyr",
  "description": "Bestowed the title Heroic Glory, Tyr has been training day and night. He swore that once he met his physical match, he would become a loyal servant.\n\nTyr wields the power of lightning to strike down his enemies. His unique weapons can transform into different forms to maximize his performance in both long-range and melee combat.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Tyr_Wallpaper_2.jpg)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511587019890360320/tyr-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Cyan Iron Ore x2](http://www.aurakingdom-db.com/item/10479-cyan-iron-ore)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Chicken in Secret Sauce x2](http://www.aurakingdom-db.com/item/11522-chicken-in-secret-sauce)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Cocoa Fruit x3](http://www.aurakingdom-db.com/item/11462-cocoa-fruit)\n   [• Grapes x3](http://www.aurakingdom-db.com/item/11464-grapes)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Enhanced Stalwart Iron Cutter x3](http://www.aurakingdom-db.com/item/13909-enhanced-stalwart-iron-cutter)\n  [• Requiem Headguard x1](http://www.aurakingdom-db.com/item/10356-requiem-headguard)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Well Preserved Mana Parasite x10](http://www.aurakingdom-db.com/item/14391-well-preserved-mana-parasite)\n  [• Willful Soul x1](http://www.aurakingdom-db.com/item/12544-willful-soul)\n  [• Mighty Horn of Argus x1](http://www.aurakingdom-db.com/item/12461-mighty-horn-of-argus)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Tyr's Key Fragment x5](http://www.aurakingdom-db.com/item/40719-tyrs-key-fragment)\n  [• Greater Elixir of Lightning x5](http://www.aurakingdom-db.com/item/14289-greater-elixir-of-lightning)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'tyr',
  description: 'tyr prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};