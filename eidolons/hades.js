const embed = {
  "title": "Hades",
  "description": "Hades, ultimate ruler of the pandemonium is a cruel and fearsome king. The dark and mysterious king is descending upon this world.\n\nHades wields a hell sword that crushes an enemy's defenses, he opens the portal to hell and releases an army of wraiths to lay waste upon his enemies. Additional damage will be dealt with every hit, team members will be recruited to join his pandemonium army of bloodthirsty souls.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Hades_Wallpaper_2.jpg)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511617540129030150/hades-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Spicy Grilled Lamb Rib x2](http://www.aurakingdom-db.com/item/11080-spicy-grilled-lamb-rib)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Ventos Special Steak x5](http://www.aurakingdom-db.com/item/11097-ventos-special-steak)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Hands of Shadow x5](http://www.aurakingdom-db.com/item/12715-hands-of-shadow)\n   [• Eternal Blood Vine Flower x15](http://www.aurakingdom-db.com/item/10497-eternal-blood-vine-flower)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Cruel Tyrant's Blades x1](http://www.aurakingdom-db.com/item/11252-cruel-tyrants-blades)\n  [• Cruel Tyrant's Tachi x1](http://www.aurakingdom-db.com/item/13617-cruel-tyrants-tachi)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Heart of the Marsh x10](http://www.aurakingdom-db.com/item/12553-heart-of-the-marsh)\n  [• Superior Health Potion x20](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n  [• Well Preserved Fallenwisp x15](http://www.aurakingdom-db.com/item/14389-well-preserved-fallenwisp)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Hades' Key Fragment x5](http://www.aurakingdom-db.com/item/40796-hades-key-fragment)\n  [• Ring of Resentment x1](http://www.aurakingdom-db.com/item/11980-ring-of-resentment)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'hades',
  description: 'hades prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};