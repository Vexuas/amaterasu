const embed = {
  "title": "Uriel",
  "description": "Fiery Angel Uriel descends, beating his dark wings, so broad they blot out the sun. In his cupped hands, a sacred flame dances, urging to be let loose. Uriel's cleansing flame washes over all evildoers, exacting judgment upon the sinners and wiping them from the Earth. His special skill is the Holy Flame Punch, a deadly combo of divine fury plus Ju-jitsu.\n\nUriel prefers to keep combat quick and painless, utilizing high powered attacks for instant kills, and aims each attack at vital points. Each one of his punches landed has crippling effects, inflicting heavy damage on his enemies. Fighting by his side is a guaranteed thrill.\n[Artwork](https://aurakingdom.aeriagames.com/news/141677/uriel-s-loyalty-program)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511532314480869394/uriel-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Ambusher Leather Armor x1](http://www.aurakingdom-db.com/item/10349-ambusher-leather-armor)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Toto's Cursed Tusk x1](http://www.aurakingdom-db.com/item/10367-totos-cursed-tusk)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Flame Red Fish x10](http://www.aurakingdom-db.com/item/14456-flame-red-fish)\n   [• Torian's Refined Cooking Set x1](http://www.aurakingdom-db.com/item/15244-torians-refined-cooking-set)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Argus's Broken Horn x1](http://www.aurakingdom-db.com/item/12527-arguss-broken-horn)\n  [• Sharpening Saw x3](http://www.aurakingdom-db.com/item/13882-sharpening-saw)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Traditional Beef Broth x10](http://www.aurakingdom-db.com/item/13850-traditional-beef-broth)\n  [• Luxury Surf 'n' Turf x10](http://www.aurakingdom-db.com/item/13873-luxury-surf-n-turf)\n  [• Superior Strength Potion x10](http://www.aurakingdom-db.com/item/12702-superior-strength-potion)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Uriel's Key Fragment x5](http://www.aurakingdom-db.com/item/40529-uriels-key-fragment)\n  [• Flawless Frozen Remains x10](http://www.aurakingdom-db.com/item/14408-flawless-frozen-remains)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'uriel',
  description: 'uriel prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};