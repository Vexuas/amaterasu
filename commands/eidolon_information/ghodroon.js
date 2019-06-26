const embed = {
  title: "Ghodroon",
  description:
    "Dwelling in magmatic caverns far beneath the world's surface, the great dragon Ghodroon has the power to sear foes with boiling lava and superheated ash. He has a fondness for gems and precious metals, and will begrudgingly work with select humans to increase his hoard.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511433013083766784/ghodroon-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Damage against Dark targets +15%\n★★☆☆ : Damage taken -5%\n★★★☆ : Damage taken -10%\n★★★★ : Damage against Dark targets +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Ghodroon.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/116-ghodroon)"
    }
  ]
};

module.exports = {
  name: "ghodroon",
  description: "ghodroon info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
