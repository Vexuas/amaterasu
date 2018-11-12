const embed = {
  "title": "Kotonoha",
  "description": "As a nine-tailed fox spirit, Kotonoha wields powerful and esoteric spells with ease, chanting secret mantras to defend her partner, or applying magical wards that greatly enhance combat prowess. Her keen eyes can pierce illusions to see the reality beneath.\n[Artwork](https://www.artstation.com/artwork/yV159)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511443359676760064/kotonoha-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Bread Pudding x2](http://www.aurakingdom-db.com/item/11533-bread-pudding)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Isaias's Gift x1 - Note: Any](http://www.aurakingdom-db.com/item/11326-isaiass-gift)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Agile Shark Hunting Mask x1](http://www.aurakingdom-db.com/item/12930-agile-shark-hunting-mask)\n   [• Agile Shark Hunting Wetsuit x1](http://www.aurakingdom-db.com/item/12931-agile-shark-hunting-wetsuit)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Magically Enhanced Muck x1](http://www.aurakingdom-db.com/item/12519-magically-enhanced-muck)\n  [• Greater Stamina Potion x5](http://www.aurakingdom-db.com/item/12698-greater-stamina-potion)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Ranger's Elite Cap x1](http://www.aurakingdom-db.com/item/13267-rangers-elite-cap)\n  [• Ranger's Elite Tunic x1](http://www.aurakingdom-db.com/item/13268-rangers-elite-tunic)\n  [• Ranger's Elite Belt x1](http://www.aurakingdom-db.com/item/13271-rangers-elite-belt)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Kotonoha's Key Fragments x5](http://www.aurakingdom-db.com/item/11377-kotonohas-key-fragments)\n  [• Flawless Crumbling Tablet x25](http://www.aurakingdom-db.com/item/14404-flawless-crumbling-tablet)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'kotonoha',
  description: 'kotonoha prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};