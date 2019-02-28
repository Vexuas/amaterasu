const embed = {
  title: "Tigerius Caesar",
  description:
    "The noble soul of Emperor Tigerius Caesar, lord of beasts, was preserved by the gods in an everlasting body. He expertly balances his regal bearing with his desire for the finest things in life, like royal buffets, servant girls, and of course, cat naps.",
  color: 8825855,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511445602803122187/tigerius-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : DMG against Lightning targets +15%\n★★☆☆ : 5% chance of a double attack\n★★★☆ : 10% chance of a double attack\n★★★★ : DMG against Lightning targets +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Ceasar_3_Star.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/121-tigerius-caesar)"
    }
  ]
};

module.exports = {
  name: "tigerius caesar",
  description: "tigerius info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
