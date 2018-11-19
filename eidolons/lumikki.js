const embed = {
  "title": "Lumikki",
  "description": "Lumikki has always yearned for a simple, happy life. With help from the Power of Gaia, she's come to the world of Aura Kingdom to pursue her dream. She's ecstatic about all the Envoys of Gaia available to keep her company.\n\nBlessed by the gods of winter and born from the purest snow, Lumikki wields the power of cold to freeze her enemies, leaving them vulnerable to attacks. She also has the power to inspire her allies, increasing their battle prowess. Whether attacking or supporting from afar, she's a well-balanced addition to any fight.",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511584621134086144/lumikki-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : DMG +8%\n★★☆☆ : Normal attack speed +25%\n★★★☆ : DMG +16%\n★★★★ : Normal attack speed +50%```\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/615964/mystery-box-lumikki) | [Full Profile](http://www.aurakingdom-db.com/eidolon/149-lumikki)"
    }
  ]
};

module.exports = {
  name: 'lumikki',
  description: 'lumikki info',
  execute(message, args) {
    message.reply({ embed });
  },
};