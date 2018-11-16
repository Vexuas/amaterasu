const embed = {
  "title": "Faust",
  "description": "Clad in a hooded cowl and dark armor, Faust's presence sets a chill in the bones. Some claim him an agent of Pandemonium in the mortal realm; others say he seeks a duel with the Knight of the Sun. Only one thing is certain: death follows in his wake.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Rhodri.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511404443066040351/faust-discord.png"
  }
};

module.exports = {
  name: 'faust',
  description: 'faust prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};