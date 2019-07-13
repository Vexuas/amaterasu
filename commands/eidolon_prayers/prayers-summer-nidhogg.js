const embed = {
  description: "Summer Nidhogg's Prayers",
  color: 1493680,
  thumbnail: {
    url: 'http://cdn.aurakingdom-db.com/images/icons/P00084.jpg'
  },
  fields: [
    {
      name: '1st Wish',
      value:
        '[• Miracle Thornapple x10](http://www.aurakingdom-db.com/item/11451-miracle-thornapple)',
      inline: true
    },
    {
      name: '2nd Wish',
      value:
        '[• Crystal Shell x10](http://www.aurakingdom-db.com/item/13678-crystal-shell)',
      inline: true
    },
    {
      name: '3rd Wish',
      value:
        "[• Adracei's Cursed Silk x1](http://www.aurakingdom-db.com/item/12460-adraceis-cursed-silk)\n[• Astral Orb x1](http://www.aurakingdom-db.com/item/11051-astral-orb)",
      inline: true
    },
    {
      name: '4th Wish',
      value:
        '[• Pearl of Light x15](http://www.aurakingdom-db.com/item/14245-pearl-of-light)\n[• Star Obsidian x15](http://www.aurakingdom-db.com/item/10483-star-obsidian)',
      inline: true
    },
    {
      name: '5th Wish',
      value:
        '[• Necklace of Comets x1](http://www.aurakingdom-db.com/item/11135-necklace-of-comets)\n[• Well Preserved Fallenwisp x10](http://www.aurakingdom-db.com/item/14389-well-preserved-fallenwisp)\n[• Unstable Energy x2](http://www.aurakingdom-db.com/item/12516-unstable-energy)',
      inline: true
    },
    {
      name: '6th Wish',
      value:
        "[• Summer Nidhogg's Key Fragment x5](http://www.aurakingdom-db.com/item/40936-summer-nidhoggs-key-fragment)\n[• Book of Oracle x10](http://www.aurakingdom-db.com/item/12547-book-of-oracle)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: 'prayers summer nidhogg',
  description: 'summer nidhogg prayers',
  execute(message, args) {
    embed.description = `${message.author} | Summer Nidhogg's Prayers`;
    message.channel.send({ embed });
  }
};
