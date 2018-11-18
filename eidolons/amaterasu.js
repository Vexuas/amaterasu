const embed = {
  "title": "Amaterasu",
  "description": "Amaterasu, the daimyojin who helped to create the world, is a powerful and resplendent goddess bestowed with the great Power of the Oracle. Amaterasu will aid any person named by the oracle, harnessing the energy of the sun to protect the figure of prophecy.\n\nIn battle, Amaterasu unleashes blinding beams of light which serve to noth dispel the darkness and deflect attacks. She also possesses benevolent powers of healing, which she uses to assist her companions when necessary. With Amaterasu by your side, surely even the most powerful of enemies will be vanquished.\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/512180/amaterasu-039-s-key-fragment-40)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511535058440552468/amaterasu-discord.png"
  }
};

module.exports = {
  name: 'amaterasu',
  description: 'amaterasu prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};