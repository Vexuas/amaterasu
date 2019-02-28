const embed = {
  description: "Faust's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00009.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Malachite x5](http://www.aurakingdom-db.com/item/10490-malachite)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Fearless Leggings x1](http://www.aurakingdom-db.com/item/10346-fearless-leggings)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Spicy Ribs and Porcinis x5](http://www.aurakingdom-db.com/item/11574-spicy-ribs-and-porcinis)\n[• Cold Soda x5](http://www.aurakingdom-db.com/item/11582-cold-soda)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Hypnosis Skin x3](http://www.aurakingdom-db.com/item/14476-hypnosis-skin)\n[• Mermaid's Tail x1](http://www.aurakingdom-db.com/item/12802-mermaids-tail)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Superior Health Potion x20](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n[• Elixir of Ice x20](http://www.aurakingdom-db.com/item/12709-elixir-of-ice)\n[• Dispelling Potion x3](http://www.aurakingdom-db.com/item/12718-dispelling-potion)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Faust's Key Fragments x5](http://www.aurakingdom-db.com/item/11362-fausts-key-fragments)\n[• Top-Quality Mana Parasite x15](http://www.aurakingdom-db.com/item/14403-top-quality-mana-parasite)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers faust",
  description: "faust prayers",
  execute(message, args) {
    embed.description = `${message.author} | Faust's Prayers`;
    message.channel.send({ embed });
  }
};
