const embed = {
  "title": "Maja",
  "description": "A liaison between Pandemonium and the mortal realm, Maja's appearance is said to foretell disaster and destruction. Envoys who would ally with her must possess iron wills, but their tenacity will be rewarded with her command of dark magics and nefarious energies.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Maja-artwork.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511422834019532801/maja-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Spicy Grilled Lamb Rib x2](http://www.aurakingdom-db.com/item/11080-spicy-grilled-lamb-rib)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Amethyst x2](http://www.aurakingdom-db.com/item/10488-amethyst)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Millennium Barbels x5](http://www.aurakingdom-db.com/item/13185-millennium-barbels)\n   [• Reinforcing Metal Plate x3](http://www.aurakingdom-db.com/item/12744-reinforcing-metal-plate)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Warrior's Light Armor x1](http://www.aurakingdom-db.com/item/11285-warriors-light-armor)\n  [• Warrior's Wristguards x1](http://www.aurakingdom-db.com/item/11286-warriors-wristguards)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Well Preserved Mana Parasite x15](http://www.aurakingdom-db.com/item/14391-well-preserved-mana-parasite)\n  [• Ritualistic Runes x5](http://www.aurakingdom-db.com/item/12542-ritualistic-runes)\n  [• Oozing Zombie Heart x1](http://www.aurakingdom-db.com/item/12548-oozing-zombie-heart)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Maja's Key Fragments x5](http://www.aurakingdom-db.com/item/11368-majas-key-fragments)\n  [• Mark of the Thunder King x10](http://www.aurakingdom-db.com/item/13535-mark-of-the-thunder-king)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'maja',
  description: 'maja prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};