const embed = {
  "title": "Hel",
  "description": "As one of the regents of Pandemonium's sprawling netherworld, Hel keeps family close and her allies closer. Her beauty has won her many admirers, but made her distrustful of others' intentions, and while she chooses her words wisely, her tongue can have a razor's edge.\n\nHel specializes in short-range, brutally damaging combat. Her hot kisses can, when blown, detonate with incredible destructive power. She also puts her limber legs to effective use, lashing foes with lightning-fast flurries of kicks.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Hel-gracevalhalla.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511469231548923934/hel-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Refined Elemental Core x1](http://www.aurakingdom-db.com/item/10509-refined-elemental-core)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Wisdom of the Ancients x2](http://www.aurakingdom-db.com/item/14127-wisdom-of-the-ancients)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Navea Seasoned Skillet x1](http://www.aurakingdom-db.com/item/15239-navea-seasoned-skillet)\n   [• Wild Bird Eggs x5](http://www.aurakingdom-db.com/item/11465-wild-bird-eggs)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Mushrooms x5](http://www.aurakingdom-db.com/item/11439-mushrooms)\n  [• Navea Vanilla x5](http://www.aurakingdom-db.com/item/11440-navea-vanilla)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Wrist Wraps of the Devourer x1](http://www.aurakingdom-db.com/item/10381-wrist-wraps-of-the-devourer)\n  [• Boots of the Devourer x1](http://www.aurakingdom-db.com/item/10382-boots-of-the-devourer)\n  [• Sash of the Devourer x1](http://www.aurakingdom-db.com/item/10383-sash-of-the-devourer)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Hel's Key Fragments x5](http://www.aurakingdom-db.com/item/40329-hels-key-fragments)\n  [• Peerless Strength Potion x25](http://www.aurakingdom-db.com/item/14281-peerless-strength-potion)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'hel',
  description: 'hel',
  execute(message, args) {
    message.channel.send({ embed });
  },
};