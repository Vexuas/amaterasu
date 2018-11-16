const embed = {
  "title": "Grimm",
  "description": "A recently-hatched dragon, Grimm doesn't let his size prevent him from displaying the confidence and tenacity of a full-grown drake. He enjoys zipping around enemies, body-slamming them in between blasts of torching flame.\n[Artwork](http://steamtradingcards.wikia.com/wiki/File:Aura_Kingdom_Artwork_6.jpg)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511231965437886474/grimm-discord.png"
  }
};

module.exports = {
  name: 'grimm',
  description: 'grimm prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};