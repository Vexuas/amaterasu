const embed = {
  title: "Bel-Chandra",
  description:
    "Known throughout Pandemonium as the Empress of Torment, Bel-Chandra harnesses fearful magic that wracks the bodies of her enemies in terrible agony. Drawn to the hidden darkness in mortals' hearts, she whispers emboldening words, encouraging mercilessness in battle.",
  color: 8825855,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511425338450903050/belchandra-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Normal attack speed +25%\n★★☆☆ : CRIT +5%\n★★★☆ : CRIT +10%\n★★★★ : Normal attack speed +50%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:BelChandra_3_Star.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/112-bel-chandra)"
    }
  ]
};

module.exports = {
  name: "bel-chandra",
  description: "bel-chandra info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
