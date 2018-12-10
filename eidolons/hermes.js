const embed = {
  "title": "Hermes",
  "description": "The high-speed lightning flashed a ray of light in the dark night sky, telling the message from the gods. The indifferent but gentle mysterious messenger coimes to the world with the roar of heaven and thunder.\n\nHermes use lightning weapons to reduce the enemy's moving speed and defense, and can use a small electric ball to boost your crit damage and combat ability. He is a tiny but powerful Eidolon.",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/521590612252688384/hermes-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : CRIT DMG +20%\n★★☆☆ : CRIT +5%\n★★★☆ : CRIT +10%\n★★★★ : CRIT DMG +40%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Hermes_Artwork.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/164-hermes)"
    }
  ]
};

module.exports = {
  name: 'hermes',
  description: 'hermes info',
  execute(message, args) {
    message.reply({ embed });
  },
};