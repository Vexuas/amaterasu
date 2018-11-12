const embed = {
  "title": "Michaela",
  "description": "Guided by the Power of Gaia, Michaela, the Holy Guardian Angel, comes to the Envoy of Gaia in her quest for justice.\n\nMichaela is blessed with the holy powers of angels and punishes evil with the great sword of justice. It's your best protection on the battlefield because of its power to reduce enemy's evasion and speed, along with its holy bond with the Envoys of Gaia.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Michaela-artwork.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511602059028725795/michaela-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Fig x5](http://www.aurakingdom-db.com/item/13017-fig)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Revitilization Drink x3](http://www.aurakingdom-db.com/item/11589-revitilization-drink)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Ramgram's Crystalline Heart x1](http://www.aurakingdom-db.com/item/12511-ramgrams-crystalline-heart)\n   [• Magically Enhanced Muck x5](http://www.aurakingdom-db.com/item/12519-magically-enhanced-muck)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Warrior's Light Armor x1](http://www.aurakingdom-db.com/item/11285-warriors-light-armor)\n  [• Warrior's Leggings x1](http://www.aurakingdom-db.com/item/11287-warriors-leggings)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Superior Health Potion x10](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n  [• Hood of the Devourer x1](http://www.aurakingdom-db.com/item/10379-hood-of-the-devourer)\n  [• Well Preserved Fallenwisp x10](http://www.aurakingdom-db.com/item/14389-well-preserved-fallenwisp)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Michaela's Key Fragment x5](http://www.aurakingdom-db.com/item/40773-michaelas-key-fragment)\n  [• Grass Kingdom's Sword of Bravery x1](http://www.aurakingdom-db.com/item/11299-grass-kingdoms-sword-of-bravery)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'michaela',
  description: 'michaela prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};