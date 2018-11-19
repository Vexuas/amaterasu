const embed = {
  "title": "Michaela",
  "description": "Guided by the Power of Gaia, Michaela, the Holy Guardian Angel, comes to the Envoy of Gaia in her quest for justice.\n\nMichaela is blessed with the holy powers of angels and punishes evil with the great sword of justice. It's your best protection on the battlefield because of its power to reduce enemy's evasion and speed, along with its holy bond with the Envoys of Gaia.",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511602059028725795/michaela-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : DMG +8%\n★★☆☆ : CRIT DMG +20%\n★★★☆ : CRIT DMG +40%\n★★★★ : DMG +16%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Michaela-artwork.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/156-michaela)"
    }
  ]
};

module.exports = {
  name: 'michaela',
  description: 'michaela info',
  execute(message, args) {
    message.reply({ embed });
  },
};