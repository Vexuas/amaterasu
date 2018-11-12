const embed = {
  "title": "Abraxas",
  "description": "When his body was badly damaged in the war between Pandemonium and the Aura Kingdom, angelic champion Abraxas was given new life in a powerful bio-armor. He aids those who seek victory in Gaia's name, and fights with a heavenly strength and grace.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Abraxas_3_Star.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511395905103069204/abraxas-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Slighty Damaged Wisp x2](http://www.aurakingdom-db.com/item/14103-slighty-damaged-wisp)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Waterfall Catfish Mucus x1](http://www.aurakingdom-db.com/item/13184-waterfall-catfish-mucus)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Multigrain Toast x5](http://www.aurakingdom-db.com/item/11659-multigrain-toast)\n   [• Premium Fried Milk Balls x5](http://www.aurakingdom-db.com/item/11626-premium-fried-milk-balls)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Aria Wrist Wraps x1](http://www.aurakingdom-db.com/item/10363-aria-wrist-wraps)\n  [• Aria Ankle Boots x1](http://www.aurakingdom-db.com/item/10364-aria-ankle-boots)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Superior Stamina Potion x20](http://www.aurakingdom-db.com/item/12705-superior-stamina-potion)\n  [• Superior Agility Potion x20](http://www.aurakingdom-db.com/item/12706-superior-agility-potion)\n  [• Superior Fortitude Potion x20](http://www.aurakingdom-db.com/item/12707-superior-fortitude-potion)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Abraxas's Key Fragments x5](http://www.aurakingdom-db.com/item/11360-abraxass-key-fragments)\n  [• Crimson Body x10](http://www.aurakingdom-db.com/item/14482-crimson-body)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'abraxas',
  description: 'abraxas prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};