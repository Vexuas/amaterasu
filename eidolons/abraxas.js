const embed = {
  "title": "Abraxas",
  "description": "When his body was badly damaged in the war between Pandemonium and the Aura Kingdom, angelic champion Abraxas was given new life in a powerful bio-armor. He aids those who seek victory in Gaia's name, and fights with a heavenly strength and grace.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Abraxas_3_Star.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511395905103069204/abraxas-discord.png"
  }
};

module.exports = {
  name: 'abraxas',
  description: 'abraxas prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};