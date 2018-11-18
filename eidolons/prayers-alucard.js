const embed = {
  "description": "Alucard's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00036.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Strength Potion x2](http://www.aurakingdom-db.com/item/12688-strength-potion)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Slighty Damaged Stone Tablet x2](http://www.aurakingdom-db.com/item/14096-slighty-damaged-stone-tablet)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Perfectly Cooked Steak x5](http://www.aurakingdom-db.com/item/11642-perfectly-cooked-steak)\n[• Swamp Latte x5](http://www.aurakingdom-db.com/item/11637-swamp-latte)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Tiger's Eye Pearl x5](http://www.aurakingdom-db.com/item/10494-tigers-eye-pearl)\n[• Crystal Carp x5](http://www.aurakingdom-db.com/item/13071-crystal-carp)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Machetes of the Elite Guardian x1](http://www.aurakingdom-db.com/item/11260-machetes-of-the-elite-guardian)\n[• Ironguard General's Helmet x1](http://www.aurakingdom-db.com/item/13257-ironguard-generals-helmet)\n[• Ironguard General's Hauberk x1](http://www.aurakingdom-db.com/item/13258-ironguard-generals-hauberk)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Alucard's Key Fragments x5](http://www.aurakingdom-db.com/item/40333-alucards-key-fragments)\n[• Sky Tower Sigil x10](http://www.aurakingdom-db.com/item/13531-sky-tower-sigil)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers alucard',
  description: 'alucard prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};