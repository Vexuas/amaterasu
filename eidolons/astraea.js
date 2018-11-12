const embed = {
  "title": "Astraea",
  "description": "Having never lost a battle, Astraea has long been renowned as the goddess of victory and war. She's tactically sage and courageous to a fault, though deep down she wishes for nothing but peace. Now, she descends from the heavens in order to protect those whom she holds dear...\n\nIn her right hand, Astraea wields a stalwart lance of silvery pallor that can penetrate the armor of even the toughest opponents. With her left hand, she defends herself with a holy shield of ornate, golden inlay that proves impervious to all attacks. The sacred power of her lance allows her to not only bring down explosive judgment on her enemies, but restore the health of her comrades as well. Astraea never forgets those whom she must protect and those who fight beside her... which is why she has yet to lose a single battle.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:AKGoE_Astraea_Wallpaper.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511494009621839893/astraea-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Angler's Fly Fishing Rod x1](http://www.aurakingdom-db.com/item/12787-anglers-fly-fishing-rod)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Well Preserved Cultural Relic x2](http://www.aurakingdom-db.com/item/14108-well-preserved-cultural-relic)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Corrosive Alloy x3](http://www.aurakingdom-db.com/item/10502-corrosive-alloy)\n   [• Solid Alloy x3](http://www.aurakingdom-db.com/item/10503-solid-alloy)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Navea Kitchen Set x1](http://www.aurakingdom-db.com/item/15241-navea-kitchen-set)\n  [• Navea Soothing Herbs x5](http://www.aurakingdom-db.com/item/11441-navea-soothing-herbs)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Elite Guardian's Grimoire x1](http://www.aurakingdom-db.com/item/11266-elite-guardians-grimoire)\n  [• Battlefield Gauntlets x1](http://www.aurakingdom-db.com/item/13264-battlefield-gauntlets)\n  [• Battlefield Long Boots x1](http://www.aurakingdom-db.com/item/13265-battlefield-long-boots)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Astraea's Key Fragments x5](http://www.aurakingdom-db.com/item/40362-astraeas-key-fragments)\n  [• Sky Tower Sigil x10](http://www.aurakingdom-db.com/item/13531-sky-tower-sigil)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'astraea',
  description: 'astraea prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};