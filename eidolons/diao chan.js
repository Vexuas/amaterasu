const embed = {
  "title": "Diao Chan",
  "description": "This alluring beauty hails from the mysterious East and uses her magical fan to command the divine winds. Though many have tried to court her, there is only one whom she truly loves.\n\nIn battle, Diao Chan harnesses the power of the wind to unleash devastating attacks on enemy forces. She can also use her fan to restore her allies' health. In the struggle to help the one she loves, there's nothing Diao Chan won't do.\n[Artwork](https://aurakingdom.aeriagames.com/news/131721/diao-chan-mystery-box)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511509147695448094/diao_chan-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Cyan Iron Ore x5](http://www.aurakingdom-db.com/item/10479-cyan-iron-ore)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Colorful Fish Scales x5](http://www.aurakingdom-db.com/item/13165-colorful-fish-scales)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Greater Fury Potion x3](http://www.aurakingdom-db.com/item/12696-greater-fury-potion)\n   [• Egg Nog with Brandy x3](http://www.aurakingdom-db.com/item/11662-egg-nog-with-brandy)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Strategist's Cap x1](http://www.aurakingdom-db.com/item/11276-strategists-cap)\n  [• Strategist's Coat x1](http://www.aurakingdom-db.com/item/11277-strategists-coat)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Well Preserved Mutant Remains x5](http://www.aurakingdom-db.com/item/14390-well-preserved-mutant-remains)\n  [• Fresh Demon Skin x3](http://www.aurakingdom-db.com/item/12551-fresh-demon-skin)\n  [• Flawless Turtle Shell x5]( http://www.aurakingdom-db.com/item/12537-flawless-turtle-shell)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Diao Chan's Key Fragment x5](http://www.aurakingdom-db.com/item/40479-diao-chans-key-fragment)\n  [• Sky Dragon King's Symbol x10](http://www.aurakingdom-db.com/item/13636-sky-dragon-kings-symbol)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'diao chan',
  description: 'diao chan prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};