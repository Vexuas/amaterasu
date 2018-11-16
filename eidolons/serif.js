const embed = {
  "title": "Serif",
  "description": "Don't be fooled by his spritely appearance - Serif is a warrior spirit with the courage to take on any foe. Darting through the air, he strikes with powerful punches and lightning attacks that leave enemies reeling.\n[Artwork](https://www.deviantart.com/rousteinire/art/Aura-Kingdom-Serif-415755639)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511148519042580481/serif-discord.png"
  }
};

module.exports = {
  name: 'serif',
  description: 'serif info',
  execute(message, args) {
    message.reply({ embed });
  },
};