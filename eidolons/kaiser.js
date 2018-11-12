const embed = {
  "title": "Kaiser Zeta",
  "description": "Born of the soul of an ancient engineer whose name has been lost to the ages, Kaiser Zeta carries the eternal hopes and dreams of youth in his robotic shell. He has burst forth from the spirit realm intent on teaching people the power of truth, justice, teamwork, and striking incredible action poses.\n\nAs a mechanical construct, Kaiser Zeta's alloyed body grants him strong defense, and he can spread a protective field over allies, reducing the damage they take. His greatest technique, however, is combining with an Envoy like a suit of armor to battle with blazing passion.\n[Artwork](http://aurakingdom.wikia.com/wiki/Kaiser_Zeta#3%20Star)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511466782872043540/kaiser-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Lightening Spanner x2](http://www.aurakingdom-db.com/item/12741-lightening-spanner)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Molten Steel Stone x2](http://www.aurakingdom-db.com/item/10484-molten-steel-stone)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Revitilization Drink x5](http://www.aurakingdom-db.com/item/11589-revitilization-drink)\n   [• Shining Secret Stone x5](http://www.aurakingdom-db.com/item/11031-shining-secret-stone)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Crustacean Warrior Sallet x1](http://www.aurakingdom-db.com/item/12962-crustacean-warrior-sallet)\n  [• Crustacean Warrior Armor x1](http://www.aurakingdom-db.com/item/12963-crustacean-warrior-armor)"
    },
    {
      "name": "5th Wish",
      "value": "  [• High Voltage Crystal x5](http://www.aurakingdom-db.com/item/12560-high-voltage-crystal)\n  [• Revelation Head Ornament x1](http://www.aurakingdom-db.com/item/10374-revelation-head-ornament)\n  [• Revelation Light Armor x1](http://www.aurakingdom-db.com/item/10375-revelation-light-armor)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Kaiser Zeta's Key Fragments x5](http://www.aurakingdom-db.com/item/40327-kaiser-zetas-key-fragments)\n  [• Top-Quality Mana Parasite x25](http://www.aurakingdom-db.com/item/14403-top-quality-mana-parasite)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'kaiser',
  description: 'kaiser prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};