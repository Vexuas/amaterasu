const embed = {
  "title": "Bahadur",
  "description": "In the vast wildernesses of Terra, Bahadur roams far afield, seeking wars and strong challengers to quell his lust for battle. As a centaur, few spirits can match the speed of his trampling gallop, and fewer still are willing to face his thunderous charge.\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/attachment/3-star-bahadur-front-2/)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511448915871137814/bahadur-discord.png"
  }
};

module.exports = {
  name: 'bahadur',
  description: 'bahadur prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};