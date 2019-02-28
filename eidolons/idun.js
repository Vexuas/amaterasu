const embed = {
  title: "Idun",
  description:
    "Master of the Golden Fruit of eternal youth and the guardian of the Holy Fruit, Idun, enters the world with a glorious light.\n\nIdun drains enemy's HP with the power of the Holy Light and inflicts DPS. She summons a huge Golden Apple to cause a heavy strike and reduces enemy's DEF and DMG. She commands an eternal power and grants party members immunity to negative Buffs and continuous HP regeneration.",
  color: 16774348,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/550552242982354944/idun-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Damage against Dark targets +15%\n★★☆☆ : HEAL +5%\n★★★☆ : HEAL +10%\n★★★★ : Damage against Dark targets +30%```\n[Artwork](https://aurakingdom.fandom.com/wiki/File:Idun_Artwork.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/167-idun)"
    }
  ]
};

module.exports = {
  name: "idun",
  description: "idun info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
