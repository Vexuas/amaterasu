const embed = {
  "title": "Zashi",
  "description": "Zashi confers with the Envoys of Gaia on matters of destiny and victory. She is viewed as a harbinger of good fortune by cultures all over the world.\n\nZashi calls upon the power of mystic flames to attack and curse enemies. The fiery tongues of flame that envelop her enemies instill fear and deal periodic damage. Zashi's flames can also remove curses and bring fortune to friendly units, making her an ideal Eidolon for defense as well as offense.",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511578873503285248/zashi-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : CRIT +5%\n★★☆☆ : DMG +8%\n★★★☆ : DMG +16%\n★★★★ : CRIT +10%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Zashiki_Warashi_Valentine.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/147-zashi)"
    }
  ]
};

module.exports = {
  name: 'zashi',
  description: 'zashi info',
  execute(message, args) {
    message.reply({ embed });
  },
};