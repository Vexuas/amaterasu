const embed = {
  "title": "Serena",
  "description": "Serena travels the night sky on her giant moon, sketching the world as she sees it below. She is the sister of the Eidolon Aelius, but their relations seem to be on rocky ground. Nevertheless, her lunar magic always shines bright to illuminate allies' way to victory.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Serena_%26_Gretel_Wallpaper.png)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511455212905431041/serena-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Star Obsidian x2](http://www.aurakingdom-db.com/item/10483-star-obsidian)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Miracle Plum x2](http://www.aurakingdom-db.com/item/11454-miracle-plum)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Mysterious Treasure Map Fragment x3](http://www.aurakingdom-db.com/item/13937-mysterious-treasure-map-fragment)\n   [• Slighty Damaged Treasure x5](http://www.aurakingdom-db.com/item/14102-slighty-damaged-treasure)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Enhanced Reinforcing Pliers x1](http://www.aurakingdom-db.com/item/12764-enhanced-reinforcing-pliers)\n  [• Reinforcing Pliers x3](http://www.aurakingdom-db.com/item/12746-reinforcing-pliers)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Malodnak's Dark Claw x1](http://www.aurakingdom-db.com/item/10384-malodnaks-dark-claw)\n  [• Nazrudin's Horn of Power x1](http://www.aurakingdom-db.com/item/13297-nazrudins-horn-of-power)\n  [• Grassy Green Rhinestone x50](http://www.aurakingdom-db.com/item/10498-grassy-green-rhinestone)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Serena's Key Fragments x5](http://www.aurakingdom-db.com/item/40219-serenas-key-fragments)\n  [• Greater Elixir of Holy Light x25](http://www.aurakingdom-db.com/item/14291-greater-elixir-of-holy-light)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'serena',
  description: 'serena prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};