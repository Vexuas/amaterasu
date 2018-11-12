const embed = {
  "title": "Zashi",
  "description": "Zashi confers with the Envoys of Gaia on matters of destiny and victory. She is viewed as a harbinger of good fortune by cultures all over the world.\n\nZashi calls upon the power of mystic flames to attack and curse enemies. The fiery tongues of flame that envelop her enemies instill fear and deal periodic damage. Zashi's flames can also remove curses and bring fortune to friendly units, making her an ideal Eidolon for defense as well as offense.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Zashiki_Warashi_Valentine.jpg)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511578873503285248/zashi-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Crescent Nectar x10](http://www.aurakingdom-db.com/item/11436-crescent-nectar)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Toast with Honey & Jam x10](http://www.aurakingdom-db.com/item/11516-toast-with-honey-jam)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Delicate Components x5](http://www.aurakingdom-db.com/item/12517-delicate-components)\n   [• Armored Rod x1](http://www.aurakingdom-db.com/item/12803-armored-rod)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Rainbow Teardrop x10](http://www.aurakingdom-db.com/item/13183-rainbow-teardrop)\n  [• Tiger's Eye Pearl x50](http://www.aurakingdom-db.com/item/10494-tigers-eye-pearl)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Llewelyn's Cloak of the Fallen x1](http://www.aurakingdom-db.com/item/11981-llewelyns-cloak-of-the-fallen)\n  [• Thick Hide x10](http://www.aurakingdom-db.com/item/12546-thick-hide)\n  [• Ironguard General's Cloak x1](http://www.aurakingdom-db.com/item/13459-ironguard-generals-cloak)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Zashi's Key Fragment x5](http://www.aurakingdom-db.com/item/40687-zashis-key-fragment)\n  [• Top-Quality Handcrafted Relic x10](http://www.aurakingdom-db.com/item/14120-top-quality-handcrafted-relic)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'zashi',
  description: 'zashi prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};