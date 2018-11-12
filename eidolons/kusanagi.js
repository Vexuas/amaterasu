const embed = {
  "title": "Kusanagi",
  "description": "Kusanagi is the sword spirit of the creator god Amaterasu. Legend says that whoever obtains her will conquer all things under heaven. Amaterasu sent Kusanagi to Terra to help those who would seek to save the world.\n\nKusanagi transformed herself into a sword spirit with a tremendous appitude for battle. She can carry out storm attacks on large numbers of enemies. When rallying together with an Envoy of Gaia, she can launch a destructive laser cannon attack over a broad area. A deep-seated confidence (some would say overconfidence) spurs her to challenge formidable opponents, because she knows that each battle will only make her stronger.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Kusanagi-gracevalhalla.png)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511489416376614912/kusanagi-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Veggies with Fresh Aioli x2](http://www.aurakingdom-db.com/item/11526-veggies-with-fresh-aioli)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Aria Cap x1](http://www.aurakingdom-db.com/item/10361-aria-cap)\n   [• Aria Coat x1](http://www.aurakingdom-db.com/item/10362-aria-coat)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Lightening Saw x1](http://www.aurakingdom-db.com/item/13885-lightening-saw)\n  [• Immaculate Secret Stone x5](http://www.aurakingdom-db.com/item/11033-immaculate-secret-stone)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Warrior's Soul x3](http://www.aurakingdom-db.com/item/12720-warriors-soul)\n  [• Superior Strength Potion x20](http://www.aurakingdom-db.com/item/12702-superior-strength-potion)\n  [• Elixir of Lightning x20](http://www.aurakingdom-db.com/item/12710-elixir-of-lightning)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Kusanagi's Key Fragments x5](http://www.aurakingdom-db.com/item/40353-kusanagis-key-fragments)\n  [• Sage Stone x25](http://www.aurakingdom-db.com/item/15015-sage-stone)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'kusanagi',
  description: 'kusanagi prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};