const embed = {
  description: "Cyril's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00023.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Cactakara Forest's Patrol Reward x1 - Note: Any](http://www.aurakingdom-db.com/item/11382-cactakara-forests-patrol-reward)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Sharpening Chisel x1](http://www.aurakingdom-db.com/item/12740-sharpening-chisel)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Bounty for the Capture of Kalna x1 - Note: Any](http://www.aurakingdom-db.com/item/11216-bounty-for-the-capture-of-kalna)\n[• Fight Club Prize (Elementary) x1 - Note: Any](http://www.aurakingdom-db.com/item/11967-fight-club-prize-elementary)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Ancient Mandarin Fish x1](http://www.aurakingdom-db.com/item/13080-ancient-mandarin-fish)\n[• Purple Gold Ore x5](http://www.aurakingdom-db.com/item/10485-purple-gold-ore)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Elite Guardian's Sword and Shield x1](http://www.aurakingdom-db.com/item/11261-elite-guardians-sword-and-shield)\n[• Ranger's Elite Wrist Wraps x1](http://www.aurakingdom-db.com/item/13269-rangers-elite-wrist-wraps)\n[• Ranger's Elite Ankle Boots x1](http://www.aurakingdom-db.com/item/13270-rangers-elite-ankle-boots)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Cyril's Key Fragments x5](http://www.aurakingdom-db.com/item/11376-cyrils-key-fragments)\n[• Greater Elixir of Storm x25](http://www.aurakingdom-db.com/item/14290-greater-elixir-of-storm)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers cyril",
  description: "cyril prayers",
  execute(message, args) {
    embed.description = `${message.author} | Cyril's Prayers`;
    message.channel.send({ embed });
  }
};
