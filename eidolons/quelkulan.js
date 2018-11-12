const embed = {
  "title": "Quelkulan",
  "description": "The dead marshes of Pandemonium are Quelkulan's domain. A powerful electric current courses through this fearsome wyrm's coils, and it can vent an incredibly toxic miasma capable of dissolving flesh and bone, and killing even mystical creatures.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Quelkulan_3_Star.jpg)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511435977504587787/quelkulan-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Silver Star Stone x2](http://www.aurakingdom-db.com/item/10480-silver-star-stone)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Chain of Rebirth x1](http://www.aurakingdom-db.com/item/11052-chain-of-rebirth)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Chopped Nuts x5](http://www.aurakingdom-db.com/item/11434-chopped-nuts)\n   [• Live Marsh Waterweed x5](http://www.aurakingdom-db.com/item/13180-live-marsh-waterweed)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Great General's Pendant x1](http://www.aurakingdom-db.com/item/11273-great-generals-pendant)\n  [• Great General's Ring x1](http://www.aurakingdom-db.com/item/11274-great-generals-ring)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Giant Marsh Trout x1](http://www.aurakingdom-db.com/item/13083-giant-marsh-trout)\n  [• Frostfin Trout x10](http://www.aurakingdom-db.com/item/13073-frostfin-trout)\n  [• Bass x50](http://www.aurakingdom-db.com/item/13054-bass)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Quelkulan's Key Fragments x5](http://www.aurakingdom-db.com/item/11374-quelkulans-key-fragments)\n  [• Top-Quality Mutant Remains x25](http://www.aurakingdom-db.com/item/14402-top-quality-mutant-remains)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'quelkulan',
  description: 'quelkulan prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};