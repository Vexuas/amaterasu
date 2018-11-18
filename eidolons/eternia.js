const embed = {
  "title": "Eternia",
  "description": "Eternia, the Goddess of Time, has traversed the full scope of eternity. While she usually exists in our own time as a calmly watchful observer, she is a master of powerful temporal magic, which allows her to restrict her enemies' actions as she bolsters her allies.\n\nEternia fights with a mystical item known as the Eternal Starstone, and casts Space-Time Distortion to immobilize her foes. The same skill can also give her allies time to recover, making her an invaluable ally in any fight.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Eternia_Reading.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511562106454147073/eternia-discord.png"
  }
};

module.exports = {
  name: 'eternia',
  description: 'eternia prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};