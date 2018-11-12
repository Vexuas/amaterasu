const embed = {
  "title": "Tanith",
  "description": "A demon warrior from Pandemonium, Tanith finds beauty and liberty in satiating one's own desires. She crossed over to help humans free their hearts from rigid moral codes, promising to show them the pleasure of frenzied battle, and a few other things besides.\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/461611/tanith-039-s-key-of-gaia)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511420845374308370/tanith-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• BBQ Snail Skewer x2](http://www.aurakingdom-db.com/item/11071-bbq-snail-skewer)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Fearless Gauntlets x1](http://www.aurakingdom-db.com/item/10345-fearless-gauntlets)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Refined Magical Core x1](http://www.aurakingdom-db.com/item/10345-fearless-gauntlets)\n   [• Cuprite x15](http://www.aurakingdom-db.com/item/10482-cuprite)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Bloodthirsty Fangs x1](http://www.aurakingdom-db.com/item/14479-bloodthirsty-fangs)\n  [• Hands of Shadow x5](http://www.aurakingdom-db.com/item/12715-hands-of-shadow)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Radiant Core x1](http://www.aurakingdom-db.com/item/12550-radiant-core)\n  [• Strengthening Saw x5](http://www.aurakingdom-db.com/item/13879-strengthening-saw)\n  [• Fusion Formula: Zaahir's Soul-Rending Fangs x1](http://www.aurakingdom-db.com/item/12502-fusion-formula-zaahirs-soul-rending-fangs)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Tanith's Key Fragments x5](http://www.aurakingdom-db.com/item/11367-taniths-key-fragments)\n  [• Battleground Wargod's Ring x1](http://www.aurakingdom-db.com/item/15010-battleground-wargods-ring)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'tanith',
  description: 'tanith prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};