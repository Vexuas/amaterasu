const embed = {
  "title": "Cleopawtra",
  "description": "Last of the feline queens, Cleopawtra's beauty was such that after her death, the gods granted her a new life. With her mercurial temperament, she can be a difficult partner, but rewards loyalty with a display of her might.\n\nBrave and shrewd, Cleopawtra can approach her targets soundlessly. When the time is right, she strikes with her Icy Claw skill, wounding and freezing her target at the same time.",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511453313405943818/cleopawtra-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Normal attack speed +25%\n★★☆☆ : DMG +8%\n★★★☆ : DMG +16%\n★★★★ : Normal attack speed +50%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Cleopawtra_3_Star.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/124-cleopawtra)"
    }
  ]
};

module.exports = {
  name: 'cleopawtra',
  description: 'cleopawtra info',
  execute(message, args) {
    message.reply({ embed });
  },
};