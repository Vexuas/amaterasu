const embed = {
  "title": "Bel-Chandra",
  "description": "Known throughout Pandemonium as the Empress of Torment, Bel-Chandra harnesses fearful magic that wracks the bodies of her enemies in terrible agony. Drawn to the hidden darkness in mortals' hearts, she whispers emboldening words, encouraging mercilessness in battle.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:BelChandra_3_Star.jpg)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511425338450903050/belchandra-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Red Leech x2](http://www.aurakingdom-db.com/item/13022-red-leech)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Strong Iced Tea x2](http://www.aurakingdom-db.com/item/11542-strong-iced-tea)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Noble's Fishing Hat x1](http://www.aurakingdom-db.com/item/12918-nobles-fishing-hat)\n   [• Noble's Fishing Vest x1](http://www.aurakingdom-db.com/item/12919-nobles-fishing-vest)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Hypnosis Powder x1](http://www.aurakingdom-db.com/item/14477-hypnosis-powder)\n  [• Navea Special Roast Tea x5](http://www.aurakingdom-db.com/item/11106-navea-special-roast-tea)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Battlefield Amulet x1](http://www.aurakingdom-db.com/item/13460-battlefield-amulet)\n  [• Battlefield Band x1](http://www.aurakingdom-db.com/item/13461-battlefield-band)\n  [• Battlefield Cape x1](http://www.aurakingdom-db.com/item/13462-battlefield-cape)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Bel-Chandra's Key Fragments x5](http://www.aurakingdom-db.com/item/11369-bel-chandras-key-fragments)\n  [• Top-Quality Corroded Ore x25](http://www.aurakingdom-db.com/item/14400-top-quality-corroded-ore)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'bel-chandra',
  description: 'bel-chandra prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};