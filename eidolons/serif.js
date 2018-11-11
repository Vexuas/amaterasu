const embed = {
  "title": "Serif",
  "description": "Don't be fooled by his spritely appearance - Serif is a warrior spirit with the courage to take on any foe. Darting through the air, he strikes with powerful punches and lightning attacks that leave enemies reeling.\n[Artwork](https://www.deviantart.com/rousteinire/art/Aura-Kingdom-Serif-415755639)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511148519042580481/serif-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Clark's Fresh Milk x2](http://www.aurakingdom-db.com/item/11076-clarks-fresh-milk)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Strengthening Spanner x2](http://www.aurakingdom-db.com/item/12735-strengthening-spanner)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Requiem Headgear x1](http://www.aurakingdom-db.com/item/10356-requiem-headguard)\n   [• Requiem Light Armor x1](http://www.aurakingdom-db.com/item/10357-requiem-light-armor)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Wise Master's Rod x1](http://www.aurakingdom-db.com/item/12813-wise-masters-rod)\n  [• Thornfang Fish x5](http://www.aurakingdom-db.com/item/14467-thornfang-fish)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Fragrant Leaf Fruit Tea x10](http://www.aurakingdom-db.com/item/13865-fragrant-leaf-fruit-tea)\n  [• Sweet Flower Cake x10](http://www.aurakingdom-db.com/item/13846-sweet-flower-cake)\n  [• Fresh Corn Salad Wrap x10](http://www.aurakingdom-db.com/item/13856-fresh-corn-salad-wrap)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Hero's Emblem x10](http://www.aurakingdom-db.com/item/11179-heros-emblem)\n  [• Merrilee's Loving Protection x1](http://www.aurakingdom-db.com/item/11118-merrilees-loving-protection)\n  [• Merrilee's Loving Gaze x1](http://www.aurakingdom-db.com/item/11118-merrilees-loving-protection)"
    }
  ]
};

module.exports = {
  name: 'serif',
  description: 'serif prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};