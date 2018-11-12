const embed = {
  "title": "Vermilion",
  "description": "Living in opulent splendor in a grand palace beyond the spirit realm's southern sky, Vermilion had everything she wanted...except adventure. Taking matters into her own hands, she decided to join forces with a worthy Envoy of Gaia and see the rich tapestry of the mortal world for herself.\n\nWith an affinity for blazing fire and a knack for wide-radius spell blasts, Vermilion is all too happy to dance her way to red-hot victory. She's a wise spirit but a complete newbie to the world of Terra, so she always has a unique perspective on even seemingly mundane events.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Vermilion-artwork.jpg)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511459984647913494/vermilion-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Carp x2](http://www.aurakingdom-db.com/item/13055-carp)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Ambusher Leather Hat x1](http://www.aurakingdom-db.com/item/10348-ambusher-leather-hat)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Frosted Berry Swiss Roll x5](http://www.aurakingdom-db.com/item/11602-frosted-berry-swiss-roll)\n   [• Tea with Almond Milk x5](http://www.aurakingdom-db.com/item/11621-tea-with-almond-milk)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Great General's Wristguards x1](http://www.aurakingdom-db.com/item/11270-great-generals-wristguards)\n  [• Great General's Leggings x1](http://www.aurakingdom-db.com/item/11271-great-generals-leggings)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Grand Duke's Rod x1](http://www.aurakingdom-db.com/item/12815-grand-dukes-rod)\n  [• Grand Duke's Crown x1](http://www.aurakingdom-db.com/item/12990-grand-dukes-crown)\n  [• Grand Duke's Celestial Robes x1](http://www.aurakingdom-db.com/item/12991-grand-dukes-celestial-robes)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Vermilion's Key Fragments x5](http://www.aurakingdom-db.com/item/40273-vermilions-key-fragments)\n  [• Greater Elixir of Flame x25](http://www.aurakingdom-db.com/item/14287-greater-elixir-of-flame)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'vermilion',
  description: 'vermilion prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};