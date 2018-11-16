const embed = {
  "title": "Tigerius Caesar",
  "description": "The noble soul of Emperor Tigerius Caesar, lord of beasts, was preserved by the gods in an everlasting body. He expertly balances his regal bearing with his desire for the finest things in life, like royal buffets, servant girls, and of course, cat naps.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Ceasar_3_Star.jpg)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511445602803122187/tigerius-discord.png"
  }
};

module.exports = {
  name: 'tigerius caesar',
  description: 'tigerius prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};