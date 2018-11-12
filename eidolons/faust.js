const embed = {
  "title": "Faust",
  "description": "Clad in a hooded cowl and dark armor, Faust's presence sets a chill in the bones. Some claim him an agent of Pandemonium in the mortal realm; others say he seeks a duel with the Knight of the Sun. Only one thing is certain: death follows in his wake.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Rhodri.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511404443066040351/faust-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Malachite x5](http://www.aurakingdom-db.com/item/10490-malachite)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Fearless Leggings x1](http://www.aurakingdom-db.com/item/10346-fearless-leggings)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Spicy Ribs and Porcinis x5](http://www.aurakingdom-db.com/item/11574-spicy-ribs-and-porcinis)\n   [• Cold Soda x5](http://www.aurakingdom-db.com/item/11582-cold-soda)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Hypnosis Skin x3](http://www.aurakingdom-db.com/item/14476-hypnosis-skin)\n  [• Mermaid's Tail x1](http://www.aurakingdom-db.com/item/12802-mermaids-tail)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Superior Health Potion x20](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n  [• Elixir of Ice x20](http://www.aurakingdom-db.com/item/12709-elixir-of-ice)\n  [• Dispelling Potion x3](http://www.aurakingdom-db.com/item/12718-dispelling-potion)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Faust's Key Fragments x5](http://www.aurakingdom-db.com/item/11362-fausts-key-fragments)\n  [• Top-Quality Mana Parasite x15](http://www.aurakingdom-db.com/item/14403-top-quality-mana-parasite)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'faust',
  description: 'faust prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};