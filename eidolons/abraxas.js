const embed = {
  title: "Abraxas",
  description:
    "When his body was badly damaged in the war between Pandemonium and the Aura Kingdom, angelic champion Abraxas was given new life in a powerful bio-armor. He aids those who seek victory in Gaia's name, and fights with a heavenly strength and grace.",
  color: 16774348,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511395905103069204/abraxas-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Damage against Holy targets +15%\n★★☆☆ : 5% chance of a double attack\n★★★☆ : 10% chance of a double attack\n★★★★ : Damage against Holy targets +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Abraxas_3_Star.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/103-abraxas)"
    }
  ]
};

module.exports = {
  name: "abraxas",
  description: "abraxas info",
  execute(message, args) {
    message.channel({ embed });
  }
};
