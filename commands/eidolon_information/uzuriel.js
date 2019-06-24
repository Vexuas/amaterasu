const embed = {
  title: "Uzuriel",
  description:
    "A messenger descended from the splendor of the Aura Kingdom, Uzuriel pledges her aid only to those who prove worthy. Favoring swift strikes to thundering blows, her holy winds uplift allies and subdue foes with a brilliant flourish.",
  color: 7667557,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511417137789796352/uzuriel-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Damage against Storm targets +15%\n★★☆☆ : CRIT DMG +20%\n★★★☆ : CRIT DMG +40%\n★★★★ : Damage against Storm targets +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Uzuriel-gracevalhalla.png) | [Full Profile](http://www.aurakingdom-db.com/eidolon/109-uzuriel)"
    }
  ]
};

module.exports = {
  name: "uzuriel",
  description: "uzuriel info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
