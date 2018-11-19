const embed = {
  "title": "Kaiser Zeta",
  "description": "Born of the soul of an ancient engineer whose name has been lost to the ages, Kaiser Zeta carries the eternal hopes and dreams of youth in his robotic shell. He has burst forth from the spirit realm intent on teaching people the power of truth, justice, teamwork, and striking incredible action poses.\n\nAs a mechanical construct, Kaiser Zeta's alloyed body grants him strong defense, and he can spread a protective field over allies, reducing the damage they take. His greatest technique, however, is combining with an Envoy like a suit of armor to battle with blazing passion.",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511466782872043540/kaiser-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Chance to suffer a Crit Hit -25%\n★★☆☆ : Damage taken -5%\n★★★☆ : Damage taken -10%\n★★★★ : Chance to suffer a Crit Hit -50%```\n[Artwork](http://aurakingdom.wikia.com/wiki/Kaiser_Zeta#3%20Star) | [Full Profile](http://www.aurakingdom-db.com/eidolon/129-kaiser-zeta)"
    }
  ]
};

module.exports = {
  name: 'kaiser zeta',
  description: 'kaiser info',
  execute(message, args) {
    message.reply({ embed });
  },
};