const embed = {
  title: "Tanith",
  description:
    "A demon warrior from Pandemonium, Tanith finds beauty and liberty in satiating one's own desires. She crossed over to help humans free their hearts from rigid moral codes, promising to show them the pleasure of frenzied battle, and a few other things besides.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511420845374308370/tanith-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : DEF +5%\n★★☆☆ : Chance to suffer a Crit Hit -25%\n★★★☆ : Chance to suffer a Crit Hit -50%\n★★★★ : DEF +10%```\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/461611/tanith-039-s-key-of-gaia) | [Full Profile](http://www.aurakingdom-db.com/eidolon/110-tanith)"
    }
  ]
};
module.exports = {
  name: "tanith",
  description: "tanith info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
