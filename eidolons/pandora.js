const embed = {
  "title": "Pandora",
  "description": "Lovely Pandora, lured by Dante into a deal for her soul, leads her beloved dog Lassie and the Envoys of Gaia on a search for the fiend.\n\nPandora attacks using fearsome calamities, and can also bewilder enemies, reducing their DEF and Attack DMG. She can restore the health and power level of comrades in danger. She's the help you want if you're facing fierce enemies.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Pandora_Wallpaper.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511589411188637696/pandora-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Multicolored Water Mushroom x5](http://www.aurakingdom-db.com/item/11444-multicolored-water-mushroom)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Sharp Fang x1](http://www.aurakingdom-db.com/item/11054-sharp-fang)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Allie's Rejuvenation Gloves x1](http://www.aurakingdom-db.com/item/11976-allies-rejuvenation-gloves)\n   [• Cruel Tyrant's Blades x1](http://www.aurakingdom-db.com/item/11252-cruel-tyrants-blades)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Phantom Rose x1](http://www.aurakingdom-db.com/item/14415-phantom-rose)\n  [• Rosegold Powder x20](http://www.aurakingdom-db.com/item/10499-rosegold-powder)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Traditional Beef Broth x10](http://www.aurakingdom-db.com/item/13850-traditional-beef-broth)\n  [• Gourmet Seafood Broth x10](http://www.aurakingdom-db.com/item/13842-gourmet-seafood-broth)\n  [• Filet Mignon x10](http://www.aurakingdom-db.com/item/11643-filet-mignon)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Pandora's Key Fragment x5](http://www.aurakingdom-db.com/item/40735-pandoras-key-fragment)\n  [• Murfeo's Immortal Oath x1](http://www.aurakingdom-db.com/item/10386-murfeos-immortal-oath)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'pandora',
  description: 'pandora prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};