const embed = {
  "description": "Sigrun's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00011.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Copper Skillet x1](http://www.aurakingdom-db.com/item/15236-copper-skillet)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Ghost Pepper x2](http://www.aurakingdom-db.com/item/11430-ghost-pepper)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Cruel Tyrant's Sword and Shield x1](http://www.aurakingdom-db.com/item/11253-cruel-tyrants-sword-and-shield)\n[• Strategist's Cape x1](http://www.aurakingdom-db.com/item/11283-strategists-cape)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Dimensional Hall Reward (Level 20) x1 - Note: Any](http://www.aurakingdom-db.com/item/11666-dimensional-hall-reward-level-20)\n[• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Sigrun's Grips x1](http://www.aurakingdom-db.com/item/11126-sigruns-grips)\n[• Sigrun's Strong Gaiters x1](http://www.aurakingdom-db.com/item/11127-sigruns-strong-gaiters)\n[• Sigrun's Belt of Protection x1](http://www.aurakingdom-db.com/item/11128-sigruns-belt-of-protection)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Sigrun's Key Fragments x5](http://www.aurakingdom-db.com/item/11364-sigruns-key-fragments)\n[• Flawless Frozen Ore x25](http://www.aurakingdom-db.com/item/14409-flawless-frozen-ore)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers sigrun',
  description: 'sigrun prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};