const embed = {
  "title": "Cesela",
  "description": "Cesela streaks across the night sky on a blazing star, landing next to the Envoy of Gaia with the force of a fallen comet. In the pitch-black of pure night, Cesela pulses with an Eidolon's mysterious power.\n\nCesela dominates the night sky, harnessing the raw energy of the stars. This cosmic power, once compressed, deals massive Dark DMG to enemies. Harnessing the power of the moon, her enemies are unable to heal. Having her by your side is a surefire way to guarantee victory!\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Cesela_%26_Uriel_Wallpaper.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511498318522744851/cesela-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Isaias's Gift x1 - Note: Any](http://www.aurakingdom-db.com/item/11326-isaiass-gift)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Reinforcing Grinding Wheel x1](http://www.aurakingdom-db.com/item/12745-reinforcing-grinding-wheel)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Freshly Caught Fish x5](http://www.aurakingdom-db.com/item/11629-freshly-caught-fish)\n   [• Autumn Oolong Tea x5](http://www.aurakingdom-db.com/item/11654-autumn-oolong-tea)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Requiem Wristguards x1](http://www.aurakingdom-db.com/item/10358-requiem-wristguards)\n  [• Requiem Leggings x1](http://www.aurakingdom-db.com/item/10359-requiem-leggings)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Helakar's Broken Spirit x1](http://www.aurakingdom-db.com/item/12529-helakars-broken-spirit)\n  [• Top-Quality Fallenwisp x5](http://www.aurakingdom-db.com/item/14401-top-quality-fallenwisp)\n  [• Elixir of Darkness x20](http://www.aurakingdom-db.com/item/12713-elixir-of-darkness)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Cesela's Key Fragments x5](http://www.aurakingdom-db.com/item/40392-ceselas-key-fragments)\n  [• Garrin's Will x1](http://www.aurakingdom-db.com/item/11982-garrins-will)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'cesela',
  description: 'cesela prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};