const embed = {
  description: "Justicia's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00060.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Blue Hardscale Fish x5](http://www.aurakingdom-db.com/item/14460-blue-hardscale-fish)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Steamy Romance x3](http://www.aurakingdom-db.com/item/11585-steamy-romance)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Essence of Titanus x1](http://www.aurakingdom-db.com/item/12512-essence-of-titanus)\n[• Magically Enhanced Muck x5](http://www.aurakingdom-db.com/item/12519-magically-enhanced-muck)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Cruel Tyrant's Cannon x1](http://www.aurakingdom-db.com/item/11257-cruel-tyrants-cannon)\n[• Warrior's Belt x1](http://www.aurakingdom-db.com/item/11288-warriors-belt)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Superior Swiftness Potion x10](http://www.aurakingdom-db.com/item/12704-superior-swiftness-potion)\n[• Revelation Gauntlets x1](http://www.aurakingdom-db.com/item/10376-revelation-gauntlets)\n[• Well Preserved Corroded Ore x10](http://www.aurakingdom-db.com/item/14388-well-preserved-corroded-ore)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Justicia's Key Fragment x5](http://www.aurakingdom-db.com/item/40767-justicias-key-fragment)\n[• Sigil of the Aqua-Dragon Queen x10](http://www.aurakingdom-db.com/item/13936-sigil-of-the-aqua-dragon-queen)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers justicia",
  description: "justicia prayers",
  execute(message, args) {
    embed.description = `${message.author} | Justicia's Prayers`;
    message.channel.send({ embed });
  }
};
