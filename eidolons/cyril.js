const embed = {
  "title": "Cyril",
  "description": "Galloping swiftly through field and plain, Cyril wanders the world looking for worthy causes to which he might pledge his aid. Although a just spirit, his blade holds nothing back against evil, and his speed is like the rush of an oncoming storm.\n\nCyril's armor is as hard as a diamond, and is able to withstand the most ferocious attacks. When he strikes with his weapon, the Sword in the Stone, the air itself transforms into Wind Blades that strike and scatter his foes, and his King's Favor skill bolsters his allies' defensive abilities. Clearly, his legendary title, King of the Knights, is well-deserved.\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/attachment/cyril-3-star-front/)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511440558745583627/cyril-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Cactakara Forest's Patrol Reward x1 - Note: Any](http://www.aurakingdom-db.com/item/11382-cactakara-forests-patrol-reward)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Sharpening Chisel x1](http://www.aurakingdom-db.com/item/12740-sharpening-chisel)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)\n   [• Fight Club Prize (Elementary) x1 - Note: Any](http://www.aurakingdom-db.com/item/11967-fight-club-prize-elementary)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Ancient Mandarin Fish x1](http://www.aurakingdom-db.com/item/13080-ancient-mandarin-fish)\n  [• Purple Gold Ore x5](http://www.aurakingdom-db.com/item/10485-purple-gold-ore)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Elite Guardian's Sword and Shield x1](http://www.aurakingdom-db.com/item/11261-elite-guardians-sword-and-shield)\n  [• Ranger's Elite Wrist Wraps x1](http://www.aurakingdom-db.com/item/13269-rangers-elite-wrist-wraps)\n  [• Ranger's Elite Ankle Boots x1](http://www.aurakingdom-db.com/item/13270-rangers-elite-ankle-boots)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Cyril's Key Fragments x5](http://www.aurakingdom-db.com/item/11376-cyrils-key-fragments)\n  [• Greater Elixir of Storm x25](http://www.aurakingdom-db.com/item/14290-greater-elixir-of-storm)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'cyril',
  description: 'cyril prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};