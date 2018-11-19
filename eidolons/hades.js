const embed = {
  "title": "Hades",
  "description": "Hades, ultimate ruler of the pandemonium is a cruel and fearsome king. The dark and mysterious king is descending upon this world.\n\nHades wields a hell sword that crushes an enemy's defenses, he opens the portal to hell and releases an army of wraiths to lay waste upon his enemies. Additional damage will be dealt with every hit, team members will be recruited to join his pandemonium army of bloodthirsty souls.",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511617540129030150/hades-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : CRIT DMG +20%\n★★☆☆ : DMG +8%\n★★★☆ : DMG +16%\n★★★★ : CRIT DMG +40%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Hades_Wallpaper_2.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/163-hades)"
    }
  ]
};
module.exports = {
  name: 'hades',
  description: 'hades info',
  execute(message, args) {
    message.reply({ embed });
  },
};