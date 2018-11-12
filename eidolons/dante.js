const embed = {
  "title": "Dante",
  "description": "It takes a pretty unique individual to anger both heaven and hell. Dante's mad quest for the ultimate power has made him the enemy of the light and the shadow.\n\nWielding a flaming sword imbued with the power of darkness, he channels its infernal energy to devastate all who stand in his way. A master strategist, Dante targets his enemies' weak points to dispatch them as quickly as possible. His astonishing destructive power is almost impossible to escape. The poor few who aren't destroyed instantly start to bleed, suffering from periodic damage. He's a powerful opponent and shouldn't be underestimated.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Lucifer_Wallpaper.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511571462264717313/dante-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Kayel's Solar Core x1](http://www.aurakingdom-db.com/item/10355-kayels-solar-core)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Lava Alloy x3](http://www.aurakingdom-db.com/item/10500-lava-alloy)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Fight Club Prize (Elementary) x1 - Note: Any](http://www.aurakingdom-db.com/item/11967-fight-club-prize-elementary)\n   [• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Fish with Mushroom Sauce x1](http://www.aurakingdom-db.com/item/11551-fish-with-mushroom-sauce)\n  [• Provincial Mushroom Macaroni x10](http://www.aurakingdom-db.com/item/13833-provincial-mushroom-macaroni)\n  [• Lightly Alcoholic Eggnog x10](http://www.aurakingdom-db.com/item/13877-lightly-alcoholic-eggnog)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Rampaging Ronin Armor x1](http://www.aurakingdom-db.com/item/14428-rampaging-ronin-armor)\n  [• Ice Field Continent Turtle Armor x10](http://www.aurakingdom-db.com/item/14485-ice-field-continent-turtle-armor)\n  [• Rampaging Ronin Helmet x1](http://www.aurakingdom-db.com/item/14427-rampaging-ronin-helmet)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Dante's Key Fragment x5](http://www.aurakingdom-db.com/item/40632-dantes-key-fragment)\n  [• Crimson Tentacle x10](http://www.aurakingdom-db.com/item/14483-crimson-tentacle)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'dante',
  description: 'dante prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};