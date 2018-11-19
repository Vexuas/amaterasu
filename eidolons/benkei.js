const embed = {
  "title": "Benkei",
  "description": "Wanderer of all realms and planes, Benkei's flamboyant appearance belies his role as a protector in matters of the spirit world. From bodyguard to siege-breaker, he mounts a powerful offense from a bracing defense, and has recently added humans to his clientele.",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511399173799804929/benkei-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Damage taken -5%\n★★☆☆ : DEF +5%\n★★★☆ : DEF +10%\n★★★★ : Damage taken -10%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Higa.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/104-benkei)"
    }
  ]
};

module.exports = {
  name: 'benkei',
  description: 'benkei info',
  execute(message, args) {
    message.reply({ embed });
  },
};