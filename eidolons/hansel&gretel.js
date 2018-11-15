const embed = {
  "title": "Hansel & Gretel",
  "description": "Hansel and Gretel were drawn to Terra via the Power of Gaia. With the blessing of the forest at their command, they harness the energy of storm and wind. Hansel possesses a keen sense of smell and the ability to vanquish gigantic foes. Gretel, on the other hand, is gifted with tremendous healing abilities.\n\nWhen they blow their horn, they are able to restore their allies' health, allowing them to keep fighting the good fight.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Hansel_%26_Gretel_Wallpaper.png)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511491608840241152/hanselgretel-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Strawberry Cake x2](http://www.aurakingdom-db.com/item/11576-strawberry-cake)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Ambusher Ankle Boots x1](http://www.aurakingdom-db.com/item/10351-ambusher-ankle-boots)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Vanilla Macaron x5](http://www.aurakingdom-db.com/item/11552-vanilla-macaron)\n   [• Egg Nog with Cinnamon x5](http://www.aurakingdom-db.com/item/11661-egg-nog-with-cinnamon)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Deep Sea Faceguard x1](http://www.aurakingdom-db.com/item/12958-deep-sea-faceguard)\n  [• Deep Sea Hauberk x1](http://www.aurakingdom-db.com/item/12959-deep-sea-hauberk)"
    },
    {
      "name": "5th Wish",
      "value": "  [• White Prayer Eggnog x20](http://www.aurakingdom-db.com/item/13878-white-prayer-eggnog)\n  [• Rainbow Colored Shards x5](http://www.aurakingdom-db.com/item/12555-rainbow-colored-shards)\n  [• Dispelling Potion x20](http://www.aurakingdom-db.com/item/12718-dispelling-potion)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Hansel and Gretel's Key Fragment x5](http://www.aurakingdom-db.com/item/40390-hansel-and-gretels-key-fragment)\n  [• Otherworldly Coin x10](http://www.aurakingdom-db.com/item/13534-otherworldly-coin)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'hansel & gretel',
  description: 'hansel prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};