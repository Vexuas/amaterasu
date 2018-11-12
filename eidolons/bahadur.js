const embed = {
  "title": "Bahadur",
  "description": "In the vast wildernesses of Terra, Bahadur roams far afield, seeking wars and strong challengers to quell his lust for battle. As a centaur, few spirits can match the speed of his trampling gallop, and fewer still are willing to face his thunderous charge.\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/attachment/3-star-bahadur-front-2/)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511448915871137814/bahadur-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Kyanite x2](http://www.aurakingdom-db.com/item/10481-kyanite)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Pure Sand Grains x2](http://www.aurakingdom-db.com/item/13186-pure-sand-grains)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Cactakara Forest's Patrol Reward x1 - Note: Any](http://www.aurakingdom-db.com/item/11382-cactakara-forests-patrol-reward)\n   [• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Fish 'n Chips x5](http://www.aurakingdom-db.com/item/11550-fish-n-chips)\n  [• Night Serenade x5](http://www.aurakingdom-db.com/item/11565-night-serenade)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Ironguard General's Gauntlets x1](http://www.aurakingdom-db.com/item/13259-ironguard-generals-gauntlets)\n  [• Ironguard General's Sabatons x1](http://www.aurakingdom-db.com/item/13260-ironguard-generals-sabatons)\n  [• Ironguard General's Belt x1](http://www.aurakingdom-db.com/item/13261-ironguard-generals-belt)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Bahadur's Key Fragments x5](http://www.aurakingdom-db.com/item/11379-bahadurs-key-fragments)\n  [• Top-Quality Stone Tablet x25](http://www.aurakingdom-db.com/item/14118-top-quality-stone-tablet)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'bahadur',
  description: 'bahadur prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};