const embed = {
  description: "Izanami's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00064.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Small Loach x10](http://www.aurakingdom-db.com/item/13016-small-loach)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Large Cricket x5](http://www.aurakingdom-db.com/item/14448-large-cricket)\n[• Eel x5](http://www.aurakingdom-db.com/item/13056-eel)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Noble's Fishing Bracers x1](http://www.aurakingdom-db.com/item/12920-nobles-fishing-bracers)\n[• Noble's Fishing Shoes x1](http://www.aurakingdom-db.com/item/12921-nobles-fishing-shoes)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Bloodthirsty Fangs x3](http://www.aurakingdom-db.com/item/14479-bloodthirsty-fangs)\n[• Thornfang Fish x1](http://www.aurakingdom-db.com/item/14467-thornfang-fish)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Smiting Stone x1](http://www.aurakingdom-db.com/item/11057-smiting-stone)\n[• Magic Fig x10](http://www.aurakingdom-db.com/item/13027-magic-fig)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Izanami's Key Fragment x5](http://www.aurakingdom-db.com/item/40779-izanamis-key-fragment)\n[• Koral's Ring of Memories x1](http://www.aurakingdom-db.com/item/11322-korals-ring-of-memories)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers izanami",
  description: "izanami prayers",
  execute(message, args) {
    embed.description = `${message.author} | Izanami's Prayers`;
    message.channel.send({ embed });
  }
};
