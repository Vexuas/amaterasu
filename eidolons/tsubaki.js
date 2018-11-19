const embed = {
  "title": "Tsubaki",
  "description": "A master assassin given new life as a heroic spirit, Tsubaki specializes in espionage and combat medicine. She can quickly apply treatments that ease fatigue or let one drain a foe's life. With powerful chakra and a host of self-made drugs, she is an excellent - if dangerous - ally.",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511451591094566922/tsubaki-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Crit Damage taken -50%\n★★☆☆ : DEF +5%\n★★★☆ : Damage taken -10%\n★★★★ : Crit Damage taken -100%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Tsubaki-gracevalhalla.png) | [Full Profile](http://www.aurakingdom-db.com/eidolon/123-tsubaki)"
    }
  ]
};
module.exports = {
  name: 'tsubaki',
  description: 'tsubaki info',
  execute(message, args) {
    message.reply({ embed });
  },
};