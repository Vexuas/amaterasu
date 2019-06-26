const embed = {
  description: "Tanith's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00014.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• BBQ Snail Skewer x2](http://www.aurakingdom-db.com/item/11071-bbq-snail-skewer)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Fearless Gauntlets x1](http://www.aurakingdom-db.com/item/10345-fearless-gauntlets)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Refined Magical Core x1](http://www.aurakingdom-db.com/item/10345-fearless-gauntlets)\n[• Cuprite x15](http://www.aurakingdom-db.com/item/10482-cuprite)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Bloodthirsty Fangs x1](http://www.aurakingdom-db.com/item/14479-bloodthirsty-fangs)\n[• Hands of Shadow x5](http://www.aurakingdom-db.com/item/12715-hands-of-shadow)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Radiant Core x1](http://www.aurakingdom-db.com/item/12550-radiant-core)\n[• Strengthening Saw x5](http://www.aurakingdom-db.com/item/13879-strengthening-saw)\n[• Fusion Formula: Zaahir's Soul-Rending Fangs x1](http://www.aurakingdom-db.com/item/12502-fusion-formula-zaahirs-soul-rending-fangs)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Tanith's Key Fragments x5](http://www.aurakingdom-db.com/item/11367-taniths-key-fragments)\n[• Battleground Wargod's Ring x1](http://www.aurakingdom-db.com/item/15010-battleground-wargods-ring)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers tanith",
  description: "tanith prayers",
  execute(message, args) {
    embed.description = `${message.author} | Tanith's Prayers`;
    message.channel.send({ embed });
  }
};
