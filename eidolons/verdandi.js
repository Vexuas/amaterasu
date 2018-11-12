const embed = {
  "title": "Verdandi",
  "description": "Verdandi, Goddess of Destiny, possesses power over the present. She contentedly lives for the moment and gives little thought to the past or future. Guided by the Cube of Gaia, she and the Envoys of Gaia weave the webs of each other's destinies.\n\nDark magic and rope of destiny in hand, Verdandi is a merciless fighter. By spurring on bloodthirsty Entrancing Butterflies, she reduces both the damage her enemies inflict and removes negative effects suffered by her allies. As powerful as she is charming, this goddess is the perfect partner in battle.\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/642562/mystery-box-verdandi)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511597767500627970/verdandi-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Red Leech x10](http://www.aurakingdom-db.com/item/13022-red-leech)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Passionate Lover x3](http://www.aurakingdom-db.com/item/11587-passionate-lover)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Ancient Amber x20](http://www.aurakingdom-db.com/item/10492-ancient-amber)\n   [• Hands of Shadow x5](http://www.aurakingdom-db.com/item/12715-hands-of-shadow)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Gladiator's Wristwraps x1](http://www.aurakingdom-db.com/item/11291-gladiators-wristwraps)\n  [• Gladiator's Ankle Boots x1](http://www.aurakingdom-db.com/item/11292-gladiators-ankle-boots)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Superior Health Potion x20](http://www.aurakingdom-db.com/item/12701-superior-health-potion)\n  [• Well Preserved Fallenwisp x15](http://www.aurakingdom-db.com/item/14389-well-preserved-fallenwisp)\n  [• Magically Concentrated Catalyst x10](http://www.aurakingdom-db.com/item/12557-magically-concentrated-catalyst)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Verdandi's Key Fragment x5](http://www.aurakingdom-db.com/item/40755-verdandis-key-fragment)\n  [• Codex of the First Village x1](http://www.aurakingdom-db.com/item/11304-codex-of-the-first-village)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'verdandi',
  description: 'verdandi prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};