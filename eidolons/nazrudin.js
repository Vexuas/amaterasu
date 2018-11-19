const embed = {
  "title": "Nazrudin",
  "description": "One of the grand dragons of the sea, Nazrudin is a master of water in all its forms. The sight of his white, serpentine body in flight is said to be a fortuitous omen to sailors, but if his wrath is awakened, he can sweep away a fleet as though it were chaff.",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511429109994225670/nazrudin-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Damage against Ice targets +15%\n★★☆☆ : EVA +5%\n★★★☆ : EVA +10%\n★★★★ : Damage against Ice targets +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Nazrudin.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/114-nazrudin)"
    }
  ]
};

module.exports = {
  name: 'nazrudin',
  description: 'nazrudin info',
  execute(message, args) {
    message.reply({ embed });
  },
};