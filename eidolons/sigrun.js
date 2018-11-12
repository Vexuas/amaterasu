const embed = {
  "title": "Sigrun",
  "description": "Sigrun is a mighty warrior-maiden who combs battlefields for the souls of the fallen. She escorts the spirits of dead heroes to a plane beyond the mortal world and avenges the deaths of noble warriors who have been wrongfully slain.\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511412247327932436/sigrun-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Copper Skillet x1](http://www.aurakingdom-db.com/item/15236-copper-skillet)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Ghost Pepper x2](http://www.aurakingdom-db.com/item/11430-ghost-pepper)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Cruel Tyrant's Sword and Shield x1](http://www.aurakingdom-db.com/item/11253-cruel-tyrants-sword-and-shield)\n   [• Strategist's Cape x1](http://www.aurakingdom-db.com/item/11283-strategists-cape)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Dimensional Hall Reward (Level 20) x1 - Note: Any](http://www.aurakingdom-db.com/item/11666-dimensional-hall-reward-level-20)\n  [• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Sigrun's Grips x1](http://www.aurakingdom-db.com/item/11126-sigruns-grips)\n  [• Sigrun's Strong Gaiters x1](http://www.aurakingdom-db.com/item/11127-sigruns-strong-gaiters)\n  [• Sigrun's Belt of Protection x1](http://www.aurakingdom-db.com/item/11128-sigruns-belt-of-protection)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Sigrun's Key Fragments x5](http://www.aurakingdom-db.com/item/11364-sigruns-key-fragments)\n  [• Flawless Frozen Ore x25](http://www.aurakingdom-db.com/item/14409-flawless-frozen-ore)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'sigrun',
  description: 'sigrun prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};