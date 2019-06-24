const embed = {
  description: "Bealdor's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00037.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Fearless Gauntlets x1](http://www.aurakingdom-db.com/item/10345-fearless-gauntlets)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Chicken in Secret Sauce x2](http://www.aurakingdom-db.com/item/11522-chicken-in-secret-sauce)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Sturdy Fish Bone Protective Mask x1](http://www.aurakingdom-db.com/item/12934-sturdy-fish-bone-protective-mask)\n[• Sturdy Fish Bone Hauberk x1](http://www.aurakingdom-db.com/item/12935-sturdy-fish-bone-hauberk)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Jade from the Deep x5](http://www.aurakingdom-db.com/item/10495-jade-from-the-deep)\n[• Jade Lazuli x5](http://www.aurakingdom-db.com/item/10496-jade-lazuli)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Adracei's Venom Sac x1](http://www.aurakingdom-db.com/item/12526-adraceis-venom-sac)\n[• Cactakara Forest's Patrol Reward x1 - Note: Any](http://www.aurakingdom-db.com/item/11382-cactakara-forests-patrol-reward)\n[• Dimensional Hall Reward (Level 20) x1 - Note: Any](http://www.aurakingdom-db.com/item/11666-dimensional-hall-reward-level-20)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Bealdor's Key Fragments x5](http://www.aurakingdom-db.com/item/40341-bealdors-key-fragments)\n[• Peerless Fortitude Potion x25](http://www.aurakingdom-db.com/item/14286-peerless-fortitude-potion)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers bealdor",
  description: "bealdor prayers",
  execute(message, args) {
    embed.description = `${message.author} | Bealdor's Prayers`;
    message.channel.send({ embed });
  }
};
