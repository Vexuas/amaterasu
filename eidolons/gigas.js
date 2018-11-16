const embed = {
  "title": "Gigas",
  "description": "Wrought of enchanted iron by a civilization long lost to memory, Gigas feels no pain and yields to no opponent. It is said that, in recognition of its strength and valor, the gods gave it a hero's soul, allowing it to exist eternally.\n[Artwork](http://steamtradingcards.wikia.com/wiki/File:Aura_Kingdom_Artwork_3.jpg)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511245185766916102/gigas-discord.png"
  }
};

module.exports = {
  name: 'gigas',
  description: 'gigas prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};