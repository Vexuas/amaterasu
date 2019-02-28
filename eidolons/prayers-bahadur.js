const embed = {
  description: "Bahadur's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00026.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value: "[• Kyanite x2](http://www.aurakingdom-db.com/item/10481-kyanite)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Pure Sand Grains x2](http://www.aurakingdom-db.com/item/13186-pure-sand-grains)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Cactakara Forest's Patrol Reward x1 - Note: Any](http://www.aurakingdom-db.com/item/11382-cactakara-forests-patrol-reward)\n[• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Fish 'n Chips x5](http://www.aurakingdom-db.com/item/11550-fish-n-chips)\n[• Night Serenade x5](http://www.aurakingdom-db.com/item/11565-night-serenade)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Ironguard General's Gauntlets x1](http://www.aurakingdom-db.com/item/13259-ironguard-generals-gauntlets)\n[• Ironguard General's Sabatons x1](http://www.aurakingdom-db.com/item/13260-ironguard-generals-sabatons)\n[• Ironguard General's Belt x1](http://www.aurakingdom-db.com/item/13261-ironguard-generals-belt)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Bahadur's Key Fragments x5](http://www.aurakingdom-db.com/item/11379-bahadurs-key-fragments)\n[• Top-Quality Stone Tablet x25](http://www.aurakingdom-db.com/item/14118-top-quality-stone-tablet)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers bahadur",
  description: "bahadur prayers",
  execute(message, args) {
    embed.description = `${message.author} | Bahadur's Prayers`;
    message.channel.send({ embed });
  }
};
