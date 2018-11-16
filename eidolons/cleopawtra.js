const embed = {
  "title": "Cleopawtra",
  "description": "Last of the feline queens, Cleopawtra's beauty was such that after her death, the gods granted her a new life. With her mercurial temperament, she can be a difficult partner, but rewards loyalty with a display of her might.\n\nBrave and shrewd, Cleopawtra can approach her targets soundlessly. When the time is right, she strikes with her Icy Claw skill, wounding and freezing her target at the same time.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Cleopawtra_3_Star.jpg)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511453313405943818/cleopawtra-discord.png"
  }
};

module.exports = {
  name: 'cleopawtra',
  description: 'cleopawtra prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};