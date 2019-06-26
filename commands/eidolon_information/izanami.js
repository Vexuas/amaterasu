const embed = {
  title: "Izanami",
  description:
    "Izanami, Lady of Styx, appeared before the Envoy of Gaia in all her glory.\n\nIzanami is constantly escorted by her fellow demons that aid her in battle. Their sharp talons can quickly cut through any enemy's armor and decrease their Defense. Wounds from these attacks bleed constantly and cause continuous damage. Hellfire from the Abyss boosts the motivation among your allies. Izanami is a great partner to have by your side in battle.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511609297625546765/izanami-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : CRIT +5%\n★★☆☆ : DMG +8%\n★★★☆ : DMG +16%\n★★★★ : CRIT +10%```\n[Artwork](http://aurakingdom.lepei.me/released-future-content/eidolon-izanami/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/159-izanami)"
    }
  ]
};

module.exports = {
  name: "izanami",
  description: "izanami info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
