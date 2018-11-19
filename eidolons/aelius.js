const embed = {
  "title": "Aelius",
  "description": "A mysterious hooded knight emblazoned with the sun's crest, Aelius brings to bear his shining power to defend his allies with shields of pure light and incinerate the enemies before him with prominences of intense solar heat.",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511393345332051968/aelius-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Move SPD +5%\n★★☆☆ : EVA +5%\n★★★☆ : EVA +10%\n★★★★ : Move SPD +10%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Aelius_3-star-whiteday.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/102-aelius)"
    }
  ]
};

module.exports = {
  name: 'aelius',
  description: 'aelius info',
  execute(message, args) {
    message.reply({ embed });
  },
};