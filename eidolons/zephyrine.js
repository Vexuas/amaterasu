const embed = {
  "title": "Zephyrine",
  "description": "Zephyrine is the sworn protector of Osiris, lord of the underworld. She passes judgment on all souls entering his domain. In battle, she uses her spiritual synergy to replenish allies' stamina.\n\nThrough powerful Nakama, Zephyrine is able to command a fierce army of loyal soldiers. Her ethereal shockwaves weaken the enemy and restore HP to allies. A well-rounded fighter, she can hold her own on the offensive and defensive sides of the battlefield.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Medjed_Herself_2.JPG)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511568499639058453/zephyrine-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Edward's Gift x1](http://www.aurakingdom-db.com/item/11327-edwards-gift)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Amethyst x5](http://www.aurakingdom-db.com/item/10488-amethyst)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Luminous Emerald x10](http://www.aurakingdom-db.com/item/10491-luminous-emerald)\n   [• Reinforcing Metal Plate x10](http://www.aurakingdom-db.com/item/12744-reinforcing-metal-plate)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Gourmet Seafood Broth x10](http://www.aurakingdom-db.com/item/13842-gourmet-seafood-broth)\n  [• Vanilla Seasoned Beef Broth x10](http://www.aurakingdom-db.com/item/13848-vanilla-seasoned-beef-broth)\n  [• Gourmet Honey Glazed Pork Cutlet x10](http://www.aurakingdom-db.com/item/13837-gourmet-honey-glazed-pork-cutlet)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Elite Guardian's Harp x1](http://www.aurakingdom-db.com/item/11267-elite-guardians-harp)\n  [• Talamund's Soul x1](http://www.aurakingdom-db.com/item/10388-talamunds-soul)\n  [• Black Knight's Promissory Breastpin x1](http://www.aurakingdom-db.com/item/14967-black-knights-promissory-breastpin)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Zephyrine's Key Fragments x5](http://www.aurakingdom-db.com/item/40629-zephyrines-key-fragments)\n  [• Top-Quality Wisp x15](http://www.aurakingdom-db.com/item/14125-top-quality-wisp)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'zephyrine',
  description: 'zephyrine prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};