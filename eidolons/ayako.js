const embed = {
  "title": "Ayako",
  "description": "Lured by Terra's culinary delights, Ayako has decided to join forces with the Envoys of Gaia. She appears in the form of an adorable wolf pup. Ayako has an insatiable appetite. Her dream is to gorge on all the delicious food Terra has to offer.\n\nImbued with the power of frost, Ayako moves swiftly across the battlefield to intercept the enemy and control the pace of the fight.\n[Artwork](http://www.fanpop.com/clubs/aeria-games/images/39632987/title/fenrir-ayako-photo)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511554414423834645/ayako-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Astral Orb x1](http://www.aurakingdom-db.com/item/11051-astral-orb)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Small Berry x10](http://www.aurakingdom-db.com/item/11447-small-berry)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Greater Swiftness Potion x10](http://www.aurakingdom-db.com/item/12697-greater-swiftness-potion)\n   [• Fresh Sirloin x100](http://www.aurakingdom-db.com/item/14452-fresh-sirloin)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Provincial Beef Broth x10](http://www.aurakingdom-db.com/item/13849-provincial-beef-broth)\n  [• Dream Honey Glazed Pork Cutlet x10](http://www.aurakingdom-db.com/item/13836-dream-honey-glazed-pork-cutlet)\n  [• Chef's Special Vanilla Fried Pork Cutlet x10](http://www.aurakingdom-db.com/item/13838-chefs-special-vanilla-fried-pork-cutlet)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Elite Guardian's Cannon x1](http://www.aurakingdom-db.com/item/11265-elite-guardians-cannon)\n  [• Titan Warrior Battle Boots x1](http://www.aurakingdom-db.com/item/10372-titan-warrior-battle-boots)\n  [• Titan Warrior Waist Armor x1](http://www.aurakingdom-db.com/item/10373-titan-warrior-waist-armor)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Ayako's Key Fragment x5](http://www.aurakingdom-db.com/item/40617-ayakos-key-fragment)\n  [• Flawless Frosted Handcrafted Relic x15](http://www.aurakingdom-db.com/item/14407-flawless-frosted-handcrafted-relic)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'ayako',
  description: 'ayako prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};