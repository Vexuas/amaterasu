const embed = {
  "title": "Alucard",
  "description": "Alucard is a mysterious Eidolon, never before sighted in Terra, Pandemonium, or the Aura Kingdom. He is thought to be a world-walker, and some say his coming heralds calamity for the world. He has a calculating personality and talks down to those he considers lesser beings.\n\nSupremely confident in his power, Alucard whips around his dual blades with tremendous force in his debonair 'human' form. However, it is when he assumes his draconian form that he truly crackles with the power to crush all who stand before him - mortals, spirits, and Eidolons alike.\n[Artwork](http://www.fanpop.com/clubs/aeria-games/images/39632954/title/alucard-photo)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511472801685831699/alucard-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Strength Potion x2](http://www.aurakingdom-db.com/item/12688-strength-potion)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Slighty Damaged Stone Tablet x2](http://www.aurakingdom-db.com/item/14096-slighty-damaged-stone-tablet)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Perfectly Cooked Steak x5](http://www.aurakingdom-db.com/item/11642-perfectly-cooked-steak)\n   [• Swamp Latte x5](http://www.aurakingdom-db.com/item/11637-swamp-latte)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Tiger's Eye Pearl x5](http://www.aurakingdom-db.com/item/10494-tigers-eye-pearl)\n  [• Crystal Carp x5](http://www.aurakingdom-db.com/item/13071-crystal-carp)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Machetes of the Elite Guardian x1](http://www.aurakingdom-db.com/item/11260-machetes-of-the-elite-guardian)\n  [• Ironguard General's Helmet x1](http://www.aurakingdom-db.com/item/13257-ironguard-generals-helmet)\n  [• Ironguard General's Hauberk x1](http://www.aurakingdom-db.com/item/13258-ironguard-generals-hauberk)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Alucard's Key Fragments x5](http://www.aurakingdom-db.com/item/40333-alucards-key-fragments)\n  [• Sky Tower Sigil x10](http://www.aurakingdom-db.com/item/13531-sky-tower-sigil)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'alucard',
  description: 'alucard prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};