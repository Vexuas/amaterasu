const embed = {
  "title": "Santa Ayako",
  "description": "Attracted by the taste of the Christmas dinner, Santa Ayako came to the side of the Envoy of Gaia. She appears in the form of an adorable wolf pup. Santa Ayako's food is great, and the biggest dream is to have a day to fill his stomach.\n\n Santa Ayako, born with the blessing of snow and the power of the wolf, kills the enemy with the threat of the wolf, reduces the damage of the enemy, and the enemy is attacked by the frozen attack to reduce its defense. Lower the blessing with the ice wolf to increase the speed of movement and improve the team's ice and snow. The skill damage of the attribute.",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/521599237482610690/santa_ayako-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Move SPD +5%\n★★☆☆ : Damage of Ice Skills +15%\n★★★☆ : Move SPD +10%\n★★★★ : Damage of Ice Skills +30%```\n[Artwork](http://aurakingdom.lepei.me/future-content/eidolon-christmas-ayako/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/170-santa-ayako)"
    }
  ]
};

module.exports = {
  name: 'santa ayako',
  description: 'santa ayako info',
  execute(message, args) {
    message.reply({ embed });
  },
};