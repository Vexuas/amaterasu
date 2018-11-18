const embed = {
  "description": "Yumikaze's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00048.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Silver Star Stone x5](http://www.aurakingdom-db.com/item/10480-silver-star-stone)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Small Egg x15](http://www.aurakingdom-db.com/item/11468-small-egg)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Greeneyed Mandarin Fish x10](http://www.aurakingdom-db.com/item/13070-greeneyed-mandarin-fish)\n[• Yellow Croaker x5](http://www.aurakingdom-db.com/item/13051-yellow-croaker)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Spaghetti and Meatballs x1](http://www.aurakingdom-db.com/item/11650-spaghetti-and-meatballs)\n[• Moonlight Sonata x1](http://www.aurakingdom-db.com/item/11567-moonlight-sonata)\n[• Chicken Under a Brick x1](http://www.aurakingdom-db.com/item/11547-chicken-under-a-brick)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Overlord's War Bow x1](http://www.aurakingdom-db.com/item/14959-overlords-war-bow)\n[• Ranger's Elite Tunic x1](http://www.aurakingdom-db.com/item/13268-rangers-elite-tunic)\n[• Ranger's Elite Ankle Boots x1](http://www.aurakingdom-db.com/item/13270-rangers-elite-ankle-boots)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Yumikaze's Key Fragment x5](http://www.aurakingdom-db.com/item/40627-yumikazes-key-fragment)\n[• Top-Quality Phosphorus Crystal x5](http://www.aurakingdom-db.com/item/14398-top-quality-phosphorus-crystal)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers yumikaze',
  description: 'yumikaze prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};