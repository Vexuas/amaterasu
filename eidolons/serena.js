const embed = {
  "title": "Serena",
  "description": "Serena travels the night sky on her giant moon, sketching the world as she sees it below. She is the sister of the Eidolon Aelius, but their relations seem to be on rocky ground. Nevertheless, her lunar magic always shines bright to illuminate allies' way to victory.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Serena_%26_Gretel_Wallpaper.png)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511455212905431041/serena-discord.png"
  }
};

module.exports = {
  name: 'serena',
  description: 'serena prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};