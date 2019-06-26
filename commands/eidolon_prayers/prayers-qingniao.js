const embed = {
  description: "Qingniao's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00076.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Well Preserved Energized Crystal x5](http://www.aurakingdom-db.com/item/14112-well-preserved-energized-crystal)"
    },
    {
      name: "2nd Wish",
      value:
        "[• Royal Rainbow x1](http://www.aurakingdom-db.com/item/12809-royal-rainbow)"
    },
    {
      name: "3rd Wish",
      value:
        "[• Wild Bird Eggs x10](http://www.aurakingdom-db.com/item/11465-wild-bird-eggs)\n[• Miracle Flower x10](http://www.aurakingdom-db.com/item/11455-miracle-flower)"
    },
    {
      name: "4th Wish",
      value:
        "[• Aria Cap x1](http://www.aurakingdom-db.com/item/10361-aria-cap)\n[• Aria Ankle Boots x1](http://www.aurakingdom-db.com/item/10364-aria-ankle-boots)"
    },
    {
      name: "5th Wish",
      value:
        "[• Enhanced Reinforcing Pliers x10](http://www.aurakingdom-db.com/item/12764-enhanced-reinforcing-pliers)\n[• Enhanced Stalwart Iron Plate x10](http://www.aurakingdom-db.com/item/12765-enhanced-stalwart-iron-plate)\n[• Enhanced Lightening Spanner x10](http://www.aurakingdom-db.com/item/12759-enhanced-lightening-spanner)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Qingniao's Key Fragment x5](http://www.aurakingdom-db.com/item/40893-qingniaos-key-fragment)\n[• Doctor Crow's Glorious Plumed Cap x1](http://www.aurakingdom-db.com/item/11306-doctor-crows-glorious-plumed-cap)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers qingniao",
  description: "qingniao prayers",
  execute(message, args) {
    embed.description = `${message.author} | Qigniao's Prayers`;
    message.channel.send({ embed });
  }
};
