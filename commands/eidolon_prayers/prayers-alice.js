const embed = {
  description: "Alice's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00045.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Dried Berries x5](http://www.aurakingdom-db.com/item/11446-dried-berries)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Golden Rod x1](http://www.aurakingdom-db.com/item/12804-golden-rod)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Miracle Tea with Honey x5](http://www.aurakingdom-db.com/item/11613-miracle-tea-with-honey)\n[• Protein Pack x5](http://www.aurakingdom-db.com/item/11091-protein-pack)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Gladiator's Belt x1](http://www.aurakingdom-db.com/item/11293-gladiators-belt)\n[• Gladiator's Ankle Boots x1](http://www.aurakingdom-db.com/item/11292-gladiators-ankle-boots)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Plumed Ring x1](http://www.aurakingdom-db.com/item/11056-plumed-ring)\n[• Magic Fig x10](http://www.aurakingdom-db.com/item/13027-magic-fig)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Alice's Key Fragment x5](http://www.aurakingdom-db.com/item/40590-alices-key-fragment)\n[• Flower Crown of the Immortal Sprite x1](http://www.aurakingdom-db.com/item/11311-flower-crown-of-the-immortal-sprite)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers alice",
  description: "alice prayers",
  execute(message, args) {
    embed.description = `${message.author} | Alice's Prayers`;
    message.channel.send({ embed });
  }
};
