const embed = {
  "title": "Uzuriel",
  "description": "A messenger descended from the splendor of the Aura Kingdom, Uzuriel pledges her aid only to those who prove worthy. Favoring swift strikes to thundering blows, her holy winds uplift allies and subdue foes with a brilliant flourish.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Uzuriel-gracevalhalla.png)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511417137789796352/uzuriel-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Large Lunchbox x2](http://www.aurakingdom-db.com/item/11593-large-lunchbox)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Cactakara Forest's Patrol Reward x1](http://www.aurakingdom-db.com/item/11382-cactakara-forests-patrol-reward)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Rainbow Scale x5](http://www.aurakingdom-db.com/item/13182-rainbow-scale)\n   [• Rainbow Teardrop x5](http://www.aurakingdom-db.com/item/13183-rainbow-teardrop)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Tattooed Skin x1](http://www.aurakingdom-db.com/item/12541-tattooed-skin)\n  [• Greater Strength Potion x5](http://www.aurakingdom-db.com/item/12695-greater-strength-potion)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Murfeo's Immortal Oath x1](http://www.aurakingdom-db.com/item/10386-murfeos-immortal-oath)\n  [• Caroline's Intent x1](http://www.aurakingdom-db.com/item/10387-carolines-intent)\n  [• Talamund's Soul x1](http://www.aurakingdom-db.com/item/10388-talamunds-soul)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Uzuriel's Key Fragments x5](http://www.aurakingdom-db.com/item/11366-uzuriels-key-fragments)\n  [• Flawless Primitive Tool x25](http://www.aurakingdom-db.com/item/14406-flawless-primitive-tool)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'uzuriel',
  description: 'uzuriel prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};