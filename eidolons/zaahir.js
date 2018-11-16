const embed = {
  "title": "Zaahir",
  "description": "A powerful efreet from the world of spirits, Zaahir gained notoriety among the djinn for his cunning, ruthlessness, and his ambition to rule. With his otherworldly savvy, he allies with those who, like him, will stop at nothing to achieve power.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Zaahir.jpg)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511438006482370560/zaahir-discord.png"
  }
};

module.exports = {
  name: 'zaahir',
  description: 'zaahir prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};