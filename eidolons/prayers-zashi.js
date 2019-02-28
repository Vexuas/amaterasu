const embed = {
  description: "Zashi's Prayers",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00054.jpg"
  },
  fields: [
    {
      name: "1st Wish",
      value:
        "[• Crescent Nectar x10](http://www.aurakingdom-db.com/item/11436-crescent-nectar)",
      inline: true
    },
    {
      name: "2nd Wish",
      value:
        "[• Toast with Honey & Jam x10](http://www.aurakingdom-db.com/item/11516-toast-with-honey-jam)",
      inline: true
    },
    {
      name: "3rd Wish",
      value:
        "[• Delicate Components x5](http://www.aurakingdom-db.com/item/12517-delicate-components)\n[• Armored Rod x1](http://www.aurakingdom-db.com/item/12803-armored-rod)",
      inline: true
    },
    {
      name: "4th Wish",
      value:
        "[• Rainbow Teardrop x10](http://www.aurakingdom-db.com/item/13183-rainbow-teardrop)\n[• Tiger's Eye Pearl x50](http://www.aurakingdom-db.com/item/10494-tigers-eye-pearl)",
      inline: true
    },
    {
      name: "5th Wish",
      value:
        "[• Llewelyn's Cloak of the Fallen x1](http://www.aurakingdom-db.com/item/11981-llewelyns-cloak-of-the-fallen)\n[• Thick Hide x10](http://www.aurakingdom-db.com/item/12546-thick-hide)\n[• Ironguard General's Cloak x1](http://www.aurakingdom-db.com/item/13459-ironguard-generals-cloak)",
      inline: true
    },
    {
      name: "6th Wish",
      value:
        "[• Zashi's Key Fragment x5](http://www.aurakingdom-db.com/item/40687-zashis-key-fragment)\n[• Top-Quality Handcrafted Relic x10](http://www.aurakingdom-db.com/item/14120-top-quality-handcrafted-relic)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      inline: true
    }
  ]
};

module.exports = {
  name: "prayers zashi",
  description: "zashi prayers",
  execute(message, args) {
    embed.description = `${message.author} | Zashi's Prayers`;
    message.channel.send({ embed });
  }
};
