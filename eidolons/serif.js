const embed = {
  "title": "Serif",
  "description": "Don't be fooled by his spritely appearance - Serif is a warrior spirit with the courage to take on any foe. Darting through the air, he strikes with powerful punches and lightning attacks that leave enemies reeling.\n",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511148519042580481/serif-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Crit Damage taken -50%\n★★☆☆ : Max HP +10%\n★★★☆ : Max HP +20%\n★★★★ : Crit Damage taken -100%```\n[Artwork](https://www.deviantart.com/rousteinire/art/Aura-Kingdom-Serif-415755639) | [Full Profile](http://www.aurakingdom-db.com/eidolon/2-serif)"
    }
  ]
};

module.exports = {
  name: 'serif',
  description: 'serif info',
  execute(message, args) {
    message.reply({ embed });
  },
};