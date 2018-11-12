const embed = {
  "title": "Muse",
  "description": "A master of art and music, Muse uses her uplifting songs to rally her allies. In order to reach a wider audience with her music, Muse journeyed to the human realm.\n\nWielding the power of divine light, Muse modulates her songs' frequencies to create various effects. They can stun enemies, recover HP for friendly units, and impart other effects, making Muse a highly versatile Eidolon.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Muse_Wallpaper_2.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511582039154229250/muse-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Herring x2](http://www.aurakingdom-db.com/item/13043-herring)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Clark's Fresh Milk x2](http://www.aurakingdom-db.com/item/11076-clarks-fresh-milk)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Lightening Spanner x1](http://www.aurakingdom-db.com/item/12741-lightening-spanner)\n   [• Shrill Vocal Cords x1](http://www.aurakingdom-db.com/item/12520-shrill-vocal-cords)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Runed Bloodgem x1](http://www.aurakingdom-db.com/item/11055-runed-bloodgem)\n  [• Jade Lazuli x5](http://www.aurakingdom-db.com/item/10496-jade-lazuli)\n  [• Tiger's Eye Pearl x5](http://www.aurakingdom-db.com/item/10494-tigers-eye-pearl)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Grass Kingdom Hero's Belt x1](http://www.aurakingdom-db.com/item/11320-grass-kingdom-heros-belt)\n  [• Superior Fury Potion x3](http://www.aurakingdom-db.com/item/12703-superior-fury-potion)\n  [• Superior Stamina Potion x3](http://www.aurakingdom-db.com/item/12703-superior-fury-potion)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Muse's Key Fragment x5](http://www.aurakingdom-db.com/item/40710-muses-key-fragment)\n  [• Battleground Wargod's Shawl x1](http://www.aurakingdom-db.com/item/15011-battleground-wargods-shawl)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'muse',
  description: 'muse prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};