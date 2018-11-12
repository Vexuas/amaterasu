const embed = {
  "title": "Eternia",
  "description": "Eternia, the Goddess of Time, has traversed the full scope of eternity. While she usually exists in our own time as a calmly watchful observer, she is a master of powerful temporal magic, which allows her to restrict her enemies' actions as she bolsters her allies.\n\nEternia fights with a mystical item known as the Eternal Starstone, and casts Space-Time Distortion to immobilize her foes. The same skill can also give her allies time to recover, making her an invaluable ally in any fight.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Eternia_Reading.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511562106454147073/eternia-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Glistening White Fish Scales x5](http://www.aurakingdom-db.com/item/13164-glistening-white-fish-scales)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Well Preserved Marine Fossil x2](http://www.aurakingdom-db.com/item/14111-well-preserved-marine-fossil)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Greater Health Potion x3](http://www.aurakingdom-db.com/item/12694-greater-health-potion)\n   [• Eternal Stoneheart x1](http://www.aurakingdom-db.com/item/12521-eternal-stoneheart)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Flavored Fruit Tea x10](http://www.aurakingdom-db.com/item/13806-flavored-fruit-tea)\n  [• Crispy Cake x10](http://www.aurakingdom-db.com/item/13844-crispy-cake)\n  [• Condensed Snowdrop Ice Cream x10](http://www.aurakingdom-db.com/item/13870-condensed-snowdrop-ice-cream)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Enhanced Sharpening Saw x5](http://www.aurakingdom-db.com/item/13900-enhanced-sharpening-saw)\n  [• Superior Stamina Tonic x40](http://www.aurakingdom-db.com/item/15031-superior-stamina-tonic)\n  [• Seer's Willow x40](http://www.aurakingdom-db.com/item/16244-seers-willow)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Eternia's Key Fragments x5](http://www.aurakingdom-db.com/item/40622-eternias-key-fragments)\n  [• Flawless Corroded Relic x10](http://www.aurakingdom-db.com/item/14405-flawless-corroded-relic)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'eternia',
  description: 'eternia prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};