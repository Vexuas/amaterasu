const embed = {
  "title": "Endora",
  "description": "Endora knows she's totally the hottest witch in the spirit realm...her rivals who call her bratty are just jealous! She flies into action with terrifying pumpkin magic and her gigantic scythe, but her toughest challenge is the battle to win Serif's heart.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Endora_Halloween_Wallpaper.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511457102565474314/endora-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Miracle Flower x2](http://www.aurakingdom-db.com/item/11455-miracle-flower)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• PB&J x2](http://www.aurakingdom-db.com/item/11517-pbj)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Large Cricket x5](http://www.aurakingdom-db.com/item/14448-large-cricket)\n   [• Eel x5](http://www.aurakingdom-db.com/item/13056-eel)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Firefly Star Stone x5](http://www.aurakingdom-db.com/item/10486-firefly-star-stone)\n  [• Fine Frozen Remains x5](http://www.aurakingdom-db.com/item/14396-fine-frozen-remains)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Gekasso's Swiveling Eye x1](http://www.aurakingdom-db.com/item/12531-gekassos-swiveling-eye)\n  [• Green Leech x1000](http://www.aurakingdom-db.com/item/13032-green-leech)\n  [• Bloodthirsty Skin x10](http://www.aurakingdom-db.com/item/14480-bloodthirsty-skin)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Endora's Key Fragments x5](http://www.aurakingdom-db.com/item/40252-endoras-key-fragments)\n  [• Blockhead's Nemesis Incinerator x1](http://www.aurakingdom-db.com/item/11303-blockheads-nemesis-incinerator)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'endora',
  description: 'endora prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};