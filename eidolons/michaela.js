const embed = {
  "title": "Michaela",
  "description": "Guided by the Power of Gaia, Michaela, the Holy Guardian Angel, comes to the Envoy of Gaia in her quest for justice.\n\nMichaela is blessed with the holy powers of angels and punishes evil with the great sword of justice. It's your best protection on the battlefield because of its power to reduce enemy's evasion and speed, along with its holy bond with the Envoys of Gaia.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Michaela-artwork.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511602059028725795/michaela-discord.png"
  }
};

module.exports = {
  name: 'michaela',
  description: 'michaela prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};