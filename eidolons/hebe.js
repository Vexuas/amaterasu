const embed = {
  "title": "Hebe",
  "description": "Hebe is not only the Goddess of Youth but also a talented musician. The sound of her harp can touch your very soul. She spreads her youthful vitality wherever she goes. She decides to go and see the Envoy of Gaia in order to understand mortal coil better.\n\nHebe's Harp is also pretty useful in combat. A few notes from her harp can freeze her enemies over and let them completely unable to move. She can also choose to tune a different melody that decreases the enemy's attack. Finally, Hebe's music can also heal her allies and restore their HP.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Hebe_Artwork_Wallpaper.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511611536540827673/hebe-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Well Preserved Treasure x5](http://www.aurakingdom-db.com/item/14113-well-preserved-treasure)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Royal Rainbow x1](http://www.aurakingdom-db.com/item/12809-royal-rainbow)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Giant Egg x10](http://www.aurakingdom-db.com/item/11450-giant-egg)\n   [• Highland Wheat Flour x10](http://www.aurakingdom-db.com/item/11459-highland-wheat-flour)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Aria Coat x1](http://www.aurakingdom-db.com/item/10362-aria-coat)\n  [• Aria Sash x1](http://www.aurakingdom-db.com/item/10365-aria-sash)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Enhanced Reinforcing Metal Plate x10](http://www.aurakingdom-db.com/item/12762-enhanced-reinforcing-metal-plate)\n  [• Enhanced Agile Metal Plate x10](http://www.aurakingdom-db.com/item/12768-enhanced-agile-metal-plate)\n  [• Enhanced Sharpening Chisel x10](http://www.aurakingdom-db.com/item/12758-enhanced-sharpening-chisel)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Hebe's Key Fragment x5](http://www.aurakingdom-db.com/item/40781-hebes-key-fragment)\n  [• Bayin's Amulet of Warmth x1](http://www.aurakingdom-db.com/item/13342-bayins-amulet-of-warmth)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'hebe',
  description: 'hebe prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};