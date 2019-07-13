const embed = {
  description: "Summer Alucard's Prayers",
  color: 1493680,
  thumbnail: {
    url: 'http://cdn.aurakingdom-db.com/images/icons/P00083.jpg'
  },
  fields: [
    {
      name: '1st Wish',
      value:
        '[• Meteor-Enhanced Hat x1](http://www.aurakingdom-db.com/item/14528-meteor-enhanced-hat)',
      inline: true
    },
    {
      name: '2nd Wish',
      value:
        '[• Ice Crystal Plant Extract x2](http://www.aurakingdom-db.com/item/14250-ice-crystal-plant-extract)',
      inline: true
    },
    {
      name: '3rd Wish',
      value:
        "[• Bombino's Freezing Touch x1](http://www.aurakingdom-db.com/item/11308-bombinos-freezing-touch)\n[• Nazrudin's Freezing Band x1](http://www.aurakingdom-db.com/item/11139-nazrudins-freezing-band)",
      inline: true
    },
    {
      name: '4th Wish',
      value:
        '[• Ice Field Frost Turtle Shell x2](http://www.aurakingdom-db.com/item/14484-ice-field-frost-turtle-shell)\n[• Miracle Thornapple x20](http://www.aurakingdom-db.com/item/11451-miracle-thornapple)',
      inline: true
    },
    {
      name: '5th Wish',
      value:
        '[• Grapes x20](http://www.aurakingdom-db.com/item/11464-grapes)\n[• Raisins x20](http://www.aurakingdom-db.com/item/11467-raisins)\n[• English Breakfast Tea x10](http://www.aurakingdom-db.com/item/11647-english-breakfast-tea)',
      inline: true
    },
    {
      name: '6th Wish',
      value:
        "[• Summer Alucard's Key Fragment x5](http://www.aurakingdom-db.com/item/40934-summer-alucards-key-fragment)\n[• Koral's Ring of Memories x1](http://www.aurakingdom-db.com/item/11322-korals-ring-of-memories)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: 'prayers summer alucard',
  description: 'summer alucard prayers',
  execute(message, args) {
    embed.description = `${message.author} | Summer Alucard's Prayers`;
    message.channel.send({ embed });
  }
};
