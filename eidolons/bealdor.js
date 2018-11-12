const embed = {
  "title": "Bealdor",
  "description": "Bealdor is the God of Light, illuminating all the world. Coddled and sheltered by his mother since he was young, he neglected worldly affairs. This offended Hel, who began to resent him. \n\nBealdor's mother once asked all the world's creatures to swear an oath not to harm him. They agreed, and he became impervious to danger. Now he can stand at the front line of any battle without fear. His powers of destruction are not to be underestimated. When he brandishes his longsword, Skee - made from the first rays of the dawn - he can perform quick and furious attacks. As an Eidolon, he is considered proficient in both attack and defense.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Bealdor-gracevalhalla.png)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511487226899726357/bealdor-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Fearless Gauntlets x1](http://www.aurakingdom-db.com/item/10345-fearless-gauntlets)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Chicken in Secret Sauce x2](http://www.aurakingdom-db.com/item/11522-chicken-in-secret-sauce)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Sturdy Fish Bone Protective Mask x1](http://www.aurakingdom-db.com/item/12934-sturdy-fish-bone-protective-mask)\n   [• Sturdy Fish Bone Hauberk x1](http://www.aurakingdom-db.com/item/12935-sturdy-fish-bone-hauberk)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Jade from the Deep x5](http://www.aurakingdom-db.com/item/10495-jade-from-the-deep)\n  [• Jade Lazuli x5](http://www.aurakingdom-db.com/item/10496-jade-lazuli)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Adracei's Venom Sac x1](http://www.aurakingdom-db.com/item/12526-adraceis-venom-sac)\n  [• Cactakara Forest's Patrol Reward x1 - Note: Any](http://www.aurakingdom-db.com/item/11382-cactakara-forests-patrol-reward)\n  [• Dimensional Hall Reward (Level 20) x1 - Note: Any](http://www.aurakingdom-db.com/item/11666-dimensional-hall-reward-level-20)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Bealdor's Key Fragments x5](http://www.aurakingdom-db.com/item/40341-bealdors-key-fragments)\n  [• Peerless Fortitude Potion x25](http://www.aurakingdom-db.com/item/14286-peerless-fortitude-potion)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'bealdor',
  description: 'bealdor prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};