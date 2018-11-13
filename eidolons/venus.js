const embed = {
  "title": "Venus",
  "description": "Venus, the goddess of love, went to the Envoys of Gaia looking for romance.\n\nGiving off a sweet pink aura, Venus releases her Cupid arrows everywhere. Not only can it reduce the enemy's damage and render them unconscious, the atmosphere of love can also restore the members' strength. She is truly a full-service Resource God.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Venus_Artwork.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511607088775036951/venus-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Crescent Nectar x10](http://www.aurakingdom-db.com/item/11436-crescent-nectar)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Cocoa Fruit x15](http://www.aurakingdom-db.com/item/11462-cocoa-fruit)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Lightening Hammer x10](http://www.aurakingdom-db.com/charts/archeology-schedule)\n   [• Enhanced Lightening Chisel x10](http://www.aurakingdom-db.com/item/12761-enhanced-lightening-chisel)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Honey Snowdrop Ice Cream x5](http://www.aurakingdom-db.com/item/13869-honey-snowdrop-ice-cream)\n  [• Flower Scented Butter Cake x5](http://www.aurakingdom-db.com/item/13845-flower-scented-butter-cake)\n  [• Extra Strong Honey Fruit Tea x5](http://www.aurakingdom-db.com/item/13866-extra-strong-honey-fruit-tea)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Overlord's War Bow x1](http://www.aurakingdom-db.com/item/14959-overlords-war-bow)\n  [• Sonia's Vow x1](http://www.aurakingdom-db.com/item/11978-sonias-vow)\n  [• Grand Duke's Rod x1](http://www.aurakingdom-db.com/item/12815-grand-dukes-rod)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Venus' Key Fragment x5](http://www.aurakingdom-db.com/item/40777-venus-key-fragment)\n  [• Valerie's Faecrafted Belt x1](http://www.aurakingdom-db.com/item/11310-valeries-faecrafted-belt)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'venus',
  description: 'venus prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};