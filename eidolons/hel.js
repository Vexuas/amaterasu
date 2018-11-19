const embed = {
  "title": "Hel",
  "description": "As one of the regents of Pandemonium's sprawling netherworld, Hel keeps family close and her allies closer. Her beauty has won her many admirers, but made her distrustful of others' intentions, and while she chooses her words wisely, her tongue can have a razor's edge.\n\nHel specializes in short-range, brutally damaging combat. Her hot kisses can, when blown, detonate with incredible destructive power. She also puts her limber legs to effective use, lashing foes with lightning-fast flurries of kicks.",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511469231548923934/hel-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : CRIT +5%\n★★☆☆ : CRIT DMG +20%\n★★★☆ : CRIT +10%\n★★★★ : CRIT DMG +40%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Hel-gracevalhalla.png) | [Full Profile](http://www.aurakingdom-db.com/eidolon/130-hel)"
    }
  ]
};

module.exports = {
  name: 'hel',
  description: 'hel info',
  execute(message, args) {
    message.reply({ embed });
  },
};