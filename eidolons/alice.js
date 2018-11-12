const embed = {
  "title": "Alice",
  "description": "After defeating the Queen of Hearts and saving Wonderland, Alice started her journey in search of true strength, glory, and new friends. When she laid eyes on the Envoy of Gaia, she knew that she finally had found her perfect companion.\n\nIn battle, Alice supports her allies with a powerful cannon that inflicts area damage as well as dealing negative effects on enemies. You'd have to be dumber than Tweedle-Dum to mess with this regicidal menace!\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Eidolon-Alice.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511538154751393803/alice-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Dried Berries x5](http://www.aurakingdom-db.com/item/11446-dried-berries)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Golden Rod x1](http://www.aurakingdom-db.com/item/12804-golden-rod)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Miracle Tea with Honey x5](http://www.aurakingdom-db.com/item/11613-miracle-tea-with-honey)\n   [• Protein Pack x5](http://www.aurakingdom-db.com/item/11091-protein-pack)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Gladiator's Belt x1](http://www.aurakingdom-db.com/item/11293-gladiators-belt)\n  [• Gladiator's Ankle Boots x1](http://www.aurakingdom-db.com/item/11292-gladiators-ankle-boots)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Plumed Ring x1](http://www.aurakingdom-db.com/item/11056-plumed-ring)\n  [• Magic Fig x10](http://www.aurakingdom-db.com/item/13027-magic-fig)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Alice's Key Fragment x5](http://www.aurakingdom-db.com/item/40590-alices-key-fragment)\n  [• Flower Crown of the Immortal Sprite x1](http://www.aurakingdom-db.com/item/11311-flower-crown-of-the-immortal-sprite)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'alice',
  description: 'alice prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};