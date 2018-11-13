const embed = {
  "title": "Izanami",
  "description": "Izanami, Lady of Styx, appeared before the Envoy of Gaia in all her glory.\n\nIzanami is constantly escorted by her fellow demons that aid her in battle. Their sharp talons can quickly cut through any enemy's armor and decrease their Defense. Wounds from these attacks bleed constantly and cause continuous damage. Hellfire from the Abyss boosts the motivation among your allies. Izanami is a great partner to have by your side in battle.\n[Artwork](http://aurakingdom.lepei.me/released-future-content/eidolon-izanami/)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511609297625546765/izanami-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Small Loach x10](http://www.aurakingdom-db.com/item/13016-small-loach)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Large Cricket x5](http://www.aurakingdom-db.com/item/14448-large-cricket)\n   [• Eel x5](http://www.aurakingdom-db.com/item/13056-eel)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Noble's Fishing Bracers x1](http://www.aurakingdom-db.com/item/12920-nobles-fishing-bracers)\n   [• Noble's Fishing Shoes x1](http://www.aurakingdom-db.com/item/12921-nobles-fishing-shoes)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Bloodthirsty Fangs x3](http://www.aurakingdom-db.com/item/14479-bloodthirsty-fangs)\n  [• Thornfang Fish x1](http://www.aurakingdom-db.com/item/14467-thornfang-fish)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Smiting Stone x1](http://www.aurakingdom-db.com/item/11057-smiting-stone)\n  [• Magic Fig x10](http://www.aurakingdom-db.com/item/13027-magic-fig)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Izanami's Key Fragment x5](http://www.aurakingdom-db.com/item/40779-izanamis-key-fragment)\n  [• Koral's Ring of Memories x1](http://www.aurakingdom-db.com/item/11322-korals-ring-of-memories)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'izanami',
  description: 'izanami prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};