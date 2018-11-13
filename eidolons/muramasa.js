const embed = {
  "title": "Muramasa",
  "description": "Muramasa is a Tsukumogami born from the Tachi. The Tachi in their hand is the source of all misfortune. Muramasa is always wandering among humans, hoping to find their saviour.\n\nThe sprite next to Muramasa is the most reliable company. Muramasa and the sprite kills enemies with their tachi and summon the evil spirit from the katana to eliminate negative status. While in urgent danger, Muramasa will summon the inferno fire to kill the enemies. It is a really powerful help.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Muramasa_Wallpaper_2.jpg)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511604604190982182/muramasa-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Malachite Karma Bead x1](http://www.aurakingdom-db.com/item/11053-malachite-karma-bead)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Well Preserved Wisp x5](http://www.aurakingdom-db.com/item/14114-well-preserved-wisp)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• White Prayer Eggnog x3](http://www.aurakingdom-db.com/item/13878-white-prayer-eggnog)\n   [• English Breakfast Tea x3](http://www.aurakingdom-db.com/item/11647-english-breakfast-tea)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Wind Ore x30](http://www.aurakingdom-db.com/item/16233-wind-ore)\n  [• Mana Blood Crystal x30](http://www.aurakingdom-db.com/item/16236-mana-blood-crystal)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Superior Strength Tonic x40](http://www.aurakingdom-db.com/item/15028-superior-strength-tonic)\n  [• Stalwart Commander's Helmet x1](http://www.aurakingdom-db.com/item/14996-stalwart-commanders-helmet)\n  [• Stalwart Commander's Armor x1](http://www.aurakingdom-db.com/item/14997-stalwart-commanders-armor)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Muramasa's Key Fragment x5](http://www.aurakingdom-db.com/item/40775-muramasas-key-fragment)\n  [• Takezo's Persistent Resolve x1](http://www.aurakingdom-db.com/item/13620-takezos-persistent-resolve)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'muramasa',
  description: 'muramasa prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};