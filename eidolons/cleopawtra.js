const embed = {
  "title": "Cleopawtra",
  "description": "Last of the feline queens, Cleopawtra's beauty was such that after her death, the gods granted her a new life. With her mercurial temperament, she can be a difficult partner, but rewards loyalty with a display of her might.\n\nBrave and shrewd, Cleopawtra can approach her targets soundlessly. When the time is right, she strikes with her Icy Claw skill, wounding and freezing her target at the same time.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Cleopawtra_3_Star.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511453313405943818/cleopawtra-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Western Saury x2](http://www.aurakingdom-db.com/item/13045-western-saury)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Sugary Soda x2](http://www.aurakingdom-db.com/item/11583-sugary-soda)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Soul of the Sands x1](http://www.aurakingdom-db.com/item/12559-soul-of-the-sands)\n   [• Well Preserved Animal Bones x5](http://www.aurakingdom-db.com/item/14110-well-preserved-animal-bones)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Strategist's Choker x1](http://www.aurakingdom-db.com/item/11281-strategists-choker)\n  [• Strategist's Ring x1](http://www.aurakingdom-db.com/item/11282-strategists-ring)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Malachite Karma Bead x1](http://www.aurakingdom-db.com/item/11053-malachite-karma-bead)\n  [• Stardust Flower x20](http://www.aurakingdom-db.com/item/11442-stardust-flower)\n  [• Rosegold Powder x50](http://www.aurakingdom-db.com/item/10499-rosegold-powder)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Cleopawtra's Key Fragments x5](http://www.aurakingdom-db.com/item/11381-cleopawtras-key-fragments)\n  [• Peerless Agility Potion x25](http://www.aurakingdom-db.com/item/14285-peerless-agility-potion)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'cleopawtra',
  description: 'cleopawtra prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};