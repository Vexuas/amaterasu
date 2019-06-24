const embed = {
  description: "Idun's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00072.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Rainbow Fruit x10](http://www.aurakingdom-db.com/item/11429-rainbow-fruit)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Rainbow Jelly x10](http://www.aurakingdom-db.com/item/11508-rainbow-jelly)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Magically Enhanced Muck x5](http://www.aurakingdom-db.com/item/12519-magically-enhanced-muck)\n[• Golden Rod x1](http://www.aurakingdom-db.com/item/12804-golden-rod)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Rainbow Teardrop x10](http://www.aurakingdom-db.com/item/13183-rainbow-teardrop)\n[• Rosegold Powder x50](http://www.aurakingdom-db.com/item/10499-rosegold-powder)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Flower Crown of the Immortal Sprite x1](http://www.aurakingdom-db.com/item/11311-flower-crown-of-the-immortal-sprite)\n[• Soul of the Sands x10](http://www.aurakingdom-db.com/item/12559-soul-of-the-sands)\n[• Ironguard General's Gauntlets x1](http://www.aurakingdom-db.com/item/13259-ironguard-generals-gauntlets)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Idun's Key Fragment x5](http://www.aurakingdom-db.com/item/40878-iduns-key-fragment)\n[• Top-Quality Wisp x10](http://www.aurakingdom-db.com/item/14125-top-quality-wisp)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};
module.exports = {
  name: "prayers idun",
  description: "idun prayers",
  execute(message, args) {
    embed.description = `${message.author} | Idun's Prayers`;
    message.channel.send({ embed });
  }
};
