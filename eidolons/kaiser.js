const embed = {
  "title": "Kaiser Zeta",
  "description": "Born of the soul of an ancient engineer whose name has been lost to the ages, Kaiser Zeta carries the eternal hopes and dreams of youth in his robotic shell. He has burst forth from the spirit realm intent on teaching people the power of truth, justice, teamwork, and striking incredible action poses.\n\nAs a mechanical construct, Kaiser Zeta's alloyed body grants him strong defense, and he can spread a protective field over allies, reducing the damage they take. His greatest technique, however, is combining with an Envoy like a suit of armor to battle with blazing passion.\n[Artwork](http://aurakingdom.wikia.com/wiki/Kaiser_Zeta#3%20Star)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511466782872043540/kaiser-discord.png"
  }
};

module.exports = {
  name: 'kaiser zeta',
  description: 'kaiser prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};