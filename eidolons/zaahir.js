const embed = {
  "title": "Zaahir",
  "description": "A powerful efreet from the world of spirits, Zaahir gained notoriety among the djinn for his cunning, ruthlessness, and his ambition to rule. With his otherworldly savvy, he allies with those who, like him, will stop at nothing to achieve power.",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511438006482370560/zaahir-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Normal attack speed +25%\n★★☆☆ : CRIT +5%\n★★★☆ : CRIT +10%\n★★★★ : Normal attack speed +50%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Zaahir.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/118-zaahir)"
    }
  ]
};

module.exports = {
  name: 'zaahir',
  description: 'zaahir info',
  execute(message, args) {
    message.reply({ embed });
  },
};