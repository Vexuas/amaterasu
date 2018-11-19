const embed = {
  "title": "Serena",
  "description": "Serena travels the night sky on her giant moon, sketching the world as she sees it below. She is the sister of the Eidolon Aelius, but their relations seem to be on rocky ground. Nevertheless, her lunar magic always shines bright to illuminate allies' way to victory.",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511455212905431041/serena-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Chance to suffer a Crit Hit -25%\n★★☆☆ : Max HP +10%\n★★★☆ : Max HP +20%\n★★★★ : Chance to suffer a Crit Hit -50%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Serena_%26_Gretel_Wallpaper.png) | [Full Profile](http://www.aurakingdom-db.com/eidolon/125-serena)"
    }
  ]
};

module.exports = {
  name: 'serena',
  description: 'serena info',
  execute(message, args) {
    message.reply({ embed });
  },
};