const embed = {
  "title": "Undine",
  "description": "Undine is an arresting beauty descended from an esteemed family of sprites. Guided by the Cube of Gaia, she swam from the deepest depths of the sea to reach land. She then took on human form in order to walk alongside the Envoys of Gaia, whom she believed to be her soul mates.\n\nLike other noble water sprites, Undine possesses the power to control this natural element, manipulating its form to bind her enemies and lower their defenses. Her unique ability to bestow restorative blessings from the sea's depths make her an ideal battle partner.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Undine_Wallpaper_1.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511594755247833098/undine-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Small Squid x10](http://www.aurakingdom-db.com/item/13015-small-squid)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Speed of Beebis x10](http://www.aurakingdom-db.com/item/12714-speed-of-beebis)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Spicy Pickled Herring x10](http://www.aurakingdom-db.com/item/11631-spicy-pickled-herring)\n   [• Fish with Mushroom Sauce x5](http://www.aurakingdom-db.com/item/11551-fish-with-mushroom-sauce)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Stanley's Demon Stomping Boots x1]( http://www.aurakingdom-db.com/item/11319-stanleys-demon-stomping-boots)\n  [• Murfeo's Winged Necklace x1](http://www.aurakingdom-db.com/item/12468-murfeos-winged-necklace)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Overlord's Grimoire x1](http://www.aurakingdom-db.com/item/14956-overlords-grimoire)\n  [• Stalwart Commander's Helmet x1](http://www.aurakingdom-db.com/item/14996-stalwart-commanders-helmet)\n  [• Stalwart Commander's Armor x1](http://www.aurakingdom-db.com/item/14997-stalwart-commanders-armor)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Undine's Key Fragment x5](http://www.aurakingdom-db.com/item/40752-undines-key-fragment)\n  [• Guardian's Last Breath x10](http://www.aurakingdom-db.com/item/12562-guardians-last-breath)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'undine',
  description: 'undine prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};