const embed = {
  "title": "Yarnaros",
  "description": "Once a warlord, Yarnaros was cursed with a draconian form. Resisting the anger in his heart, he instead championed the weak and subdued demons, until at last the gods lifted him up, giving him golden wings and the power to shake the earth and sky.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Yarnaros_3_Star.jpg)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511431205569167360/yarnaros-discord.png"
  }
};

module.exports = {
  name: 'yarnaros',
  description: 'yarnaros prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};