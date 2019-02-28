const embed = {
  title: "Amaterasu",
  description:
    "Amaterasu, the daimyojin who helped to create the world, is a powerful and resplendent goddess bestowed with the great Power of the Oracle. Amaterasu will aid any person named by the oracle, harnessing the energy of the sun to protect the figure of prophecy.\n\nIn battle, Amaterasu unleashes blinding beams of light which serve to noth dispel the darkness and deflect attacks. She also possesses benevolent powers of healing, which she uses to assist her companions when necessary. With Amaterasu by your side, surely even the most powerful of enemies will be vanquished.",
  color: 16774348,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511535058440552468/amaterasu-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Chance to suffer a Crit Hit -25%\n★★☆☆ : Max HP +10%\n★★★☆ : Max HP +20%\n★★★★ : Chance to suffer a Crit Hit -50%```\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/512180/amaterasu-039-s-key-fragment-40) | [Full Profile](http://www.aurakingdom-db.com/eidolon/139-amaterasu)"
    }
  ]
};

module.exports = {
  name: "amaterasu",
  description: "amaterasu info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
