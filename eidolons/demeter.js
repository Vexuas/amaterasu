const embed = {
  "title": "Demeter",
  "description": "The Caring Goddess Demeter has brought abundance and prosperity to the world. But for any reason she returned to the forest. Afterward the Envoy of Gaia reached to open her heart again, and she came back together with Petra, the Forest Sacred Beast.\n\nDemeter was living in the forest for a long time. She knows how to blend in the Storm element with her magic, and imbuing it to the enemies in order to reduce their mobility and combat power. It helps you to deal with tough enemies, and summons the Flower of Life to recover HP of party members.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Demeter_Art.jpg)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511615135102795777/demeter-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Princess Hardscale Fish x5](http://www.aurakingdom-db.com/item/14462-princess-hardscale-fish)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Titan's Spirit Flower x1](http://www.aurakingdom-db.com/item/14254-titans-spirit-flower)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Vigor Leaves x10](http://www.aurakingdom-db.com/item/11449-vigor-leaves)\n   [• Cliffside Blossom x10](http://www.aurakingdom-db.com/item/15605-cliffside-blossom)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Lestaro's Strength of the Earth x1](http://www.aurakingdom-db.com/item/12522-lestaros-strength-of-the-earth)\n  [• Ice Crystal Plant Extract x20](http://www.aurakingdom-db.com/item/14250-ice-crystal-plant-extract)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Enhanced Lightening Chisel x10](http://www.aurakingdom-db.com/item/12761-enhanced-lightening-chisel)\n  [• Solid Alloy x10](http://www.aurakingdom-db.com/item/10503-solid-alloy)\n  [• Nymphet's Graceful Hairpin x1](http://www.aurakingdom-db.com/item/12970-nymphets-graceful-hairpin)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Demeter's Key Fragment x5](http://www.aurakingdom-db.com/item/40791-demeters-key-fragment)\n  [• Superior Health Potion x10](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'demeter',
  description: 'demeter prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};