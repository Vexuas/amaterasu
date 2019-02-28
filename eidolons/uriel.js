const embed = {
  title: "Uriel",
  description:
    "Fiery Angel Uriel descends, beating his dark wings, so broad they blot out the sun. In his cupped hands, a sacred flame dances, urging to be let loose. Uriel's cleansing flame washes over all evildoers, exacting judgment upon the sinners and wiping them from the Earth. His special skill is the Holy Flame Punch, a deadly combo of divine fury plus Ju-jitsu.\n\nUriel prefers to keep combat quick and painless, utilizing high powered attacks for instant kills, and aims each attack at vital points. Each one of his punches landed has crippling effects, inflicting heavy damage on his enemies. Fighting by his side is a guaranteed thrill.",
  color: 14687747,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511532314480869394/uriel-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : CRIT DMG +20%\n★★☆☆ : DMG +8%\n★★★☆ : DMG +16%\n★★★★ : CRIT DMG +40%```\n[Artwork](https://aurakingdom.aeriagames.com/news/141677/uriel-s-loyalty-program) | [Full Profile](http://www.aurakingdom-db.com/eidolon/138-uriel)"
    }
  ]
};

module.exports = {
  name: "uriel",
  description: "uriel info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
