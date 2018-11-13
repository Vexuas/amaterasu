const embed = {
  "title": "Eirene",
  "description": "Raised amid snowfalls and blizzards, Eirene came to the Envoys of Gaia carrying her songs of peace.\n\nEirene is able to control the power of frost in order to daze her enemies by throwing snowballs at them. The fierce strike stuns the targets, and uses the power of ice crystal to reduce the damage caused by the enemies. This gentle healer will help you to be back on your feet after battling.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Eirene_Wallpaper.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511613409847148555/eirene-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Ghost Pepper x5](http://www.aurakingdom-db.com/item/11430-ghost-pepper)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Fresh Garlic Sprouts x10](http://www.aurakingdom-db.com/item/11461-fresh-garlic-sprouts)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Allie's Rejuvenation Gloves x1](http://www.aurakingdom-db.com/item/11976-allies-rejuvenation-gloves)\n   [• Strategist's Ring x1](http://www.aurakingdom-db.com/item/11282-strategists-ring)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Glacial Moon x1](http://www.aurakingdom-db.com/item/14416-glacial-moon)\n  [• Jade from the Deep x20](http://www.aurakingdom-db.com/item/10495-jade-from-the-deep)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Condensed Snowdrop Ice Cream x10](http://www.aurakingdom-db.com/item/13870-condensed-snowdrop-ice-cream)\n  [• White Prayer Eggnog x10](http://www.aurakingdom-db.com/item/13878-white-prayer-eggnog)\n  [• Sweet Flower Cake x10](http://www.aurakingdom-db.com/item/13846-sweet-flower-cake)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Eirene's Key Fragment x5](http://www.aurakingdom-db.com/item/40787-eirenes-key-fragment)\n  [• Murfeo's Immortal Oath x1](http://www.aurakingdom-db.com/item/10386-murfeos-immortal-oath)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'eirene',
  description: 'eirene prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};