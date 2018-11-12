const embed = {
  "title": "Yumikaze",
  "description": "Yumikaze's arrows, fired from her powerful longbow, can pierce any armor. Strong and beautiful, and blessed with the Power of Storms, Yumikaze only fights alongside those she deems worthy.\n\nDue to her longbow's reach, she is a master of ranged combat. When she imbues her arrows with the Power of Storms, they can inflict critical damage on her foes. She can also boost her allies' defenses, allowing them to focus more of their energy on attacks. With her deadly, well-placed arrows, she serves as a powerful ally to the Envoy of Gaia.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Yumikaze_Profile.JPG)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511565179369160704/yumikaze-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Silver Star Stone x5](http://www.aurakingdom-db.com/item/10480-silver-star-stone)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Small Egg x15](http://www.aurakingdom-db.com/item/11468-small-egg)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Greeneyed Mandarin Fish x10](http://www.aurakingdom-db.com/item/13070-greeneyed-mandarin-fish)\n   [• Yellow Croaker x5](http://www.aurakingdom-db.com/item/13051-yellow-croaker)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Spaghetti and Meatballs x1](http://www.aurakingdom-db.com/item/11650-spaghetti-and-meatballs)\n  [• Moonlight Sonata x1](http://www.aurakingdom-db.com/item/11567-moonlight-sonata)\n  [• Chicken Under a Brick x1](http://www.aurakingdom-db.com/item/11547-chicken-under-a-brick)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Overlord's War Bow x1](http://www.aurakingdom-db.com/item/14959-overlords-war-bow)\n  [• Ranger's Elite Tunic x1](http://www.aurakingdom-db.com/item/13268-rangers-elite-tunic)\n  [• Ranger's Elite Ankle Boots x1](http://www.aurakingdom-db.com/item/13270-rangers-elite-ankle-boots)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Yumikaze's Key Fragment x5](http://www.aurakingdom-db.com/item/40627-yumikazes-key-fragment)\n  [• Top-Quality Phosphorus Crystal x5](http://www.aurakingdom-db.com/item/14398-top-quality-phosphorus-crystal)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'yumikaze',
  description: 'yumikaze prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};