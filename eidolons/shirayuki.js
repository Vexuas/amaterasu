const embed = {
  "title": "Shirayuki",
  "description": "With an impeccable sense of manners and propriety, elegant beauty that holds the gaze of men and women alike, and great skill in poetry and music, Shirayuki has captured the hearts of all in the wintry realm from which she hails. Will those in the mortal realm appreciate her exacting aesthetic tastes?\n\nAble to manipulate snow and ice at her whim, she uses her harsh assault to wear enemies down, but her skill as an entertainer also allows her to bolster the power of her allies. Naturally, Shirayuki finds this elegant balance between offense and defense the most fitting.\n[Artwork](http://www.fanpop.com/clubs/aeria-games/images/39641873/title/shirayuki-photo)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511463982746566666/shirayuki-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Catfish x2](http://www.aurakingdom-db.com/item/13049-catfish)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Ritual Trophy Core x1](http://www.aurakingdom-db.com/item/10515-ritual-trophy-core)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Gladiator's Cap x1](http://www.aurakingdom-db.com/item/11289-gladiators-cap)\n   [• Gladiator's Coat x1](http://www.aurakingdom-db.com/item/11290-gladiators-coat)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Well Preserved Pottery Shard x5](http://www.aurakingdom-db.com/item/14106-well-preserved-pottery-shard)\n  [• Oasis Beer x5](http://www.aurakingdom-db.com/item/11088-oasis-beer)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Deep Sea Tuna x1](http://www.aurakingdom-db.com/item/13078-deep-sea-tuna)\n  [• Rainbow Salmon x1](http://www.aurakingdom-db.com/item/13084-rainbow-salmon)\n  [• Wisdom Fish x100](http://www.aurakingdom-db.com/item/13229-wisdom-fish)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Shirayuki's Key Fragments x5](http://www.aurakingdom-db.com/item/40288-shirayukis-key-fragments)\n  [• Toto's Roaring Waters x1](http://www.aurakingdom-db.com/item/12523-totos-roaring-waters)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'shirayuki',
  description: 'shirayuki prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};