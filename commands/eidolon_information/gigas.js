const embed = {
  title: "Gigas",
  description:
    "Wrought of enchanted iron by a civilization long lost to memory, Gigas feels no pain and yields to no opponent. It is said that, in recognition of its strength and valor, the gods gave it a hero's soul, allowing it to exist eternally.",
  color: 8825855,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511245185766916102/gigas-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : DMG against Lightning targets +15%\n★★☆☆ : DEF +5%\n★★★☆ : DEF +10%\n★★★★ : DMG against Lightning targets +30%```\n[Artwork](http://steamtradingcards.wikia.com/wiki/File:Aura_Kingdom_Artwork_3.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/101-gigas)"
    }
  ]
};

module.exports = {
  name: "gigas",
  description: "gigas info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
