const embed = {
  "title": "Grimm",
  "description": "A recently-hatched dragon, Grimm doesn't let his size prevent him from displaying the confidence and tenacity of a full-grown drake. He enjoys zipping around enemies, body-slamming them in between blasts of torching flame.",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511231965437886474/grimm-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Damage against Flame targets +15%\n★★☆☆ : DMG +8%\n★★★☆ : DMG +16%\n★★★★ : Damage of Flame Skills +30%```\n[Artwork](http://steamtradingcards.wikia.com/wiki/File:Aura_Kingdom_Artwork_6.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/4-grimm)"
    }
  ]
};

module.exports = {
  name: 'grimm',
  description: 'grimm info',
  execute(message, args) {
    message.reply({ embed });
  },
};