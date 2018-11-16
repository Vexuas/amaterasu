const embed = {
  "title": "Endora",
  "description": "Endora knows she's totally the hottest witch in the spirit realm...her rivals who call her bratty are just jealous! She flies into action with terrifying pumpkin magic and her gigantic scythe, but her toughest challenge is the battle to win Serif's heart.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Endora_Halloween_Wallpaper.png)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511457102565474314/endora-discord.png"
  }
};

module.exports = {
  name: 'endora',
  description: 'endora prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};