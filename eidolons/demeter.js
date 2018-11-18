const embed = {
  "title": "Demeter",
  "description": "The Caring Goddess Demeter has brought abundance and prosperity to the world. But for any reason she returned to the forest. Afterward the Envoy of Gaia reached to open her heart again, and she came back together with Petra, the Forest Sacred Beast.\n\nDemeter was living in the forest for a long time. She knows how to blend in the Storm element with her magic, and imbuing it to the enemies in order to reduce their mobility and combat power. It helps you to deal with tough enemies, and summons the Flower of Life to recover HP of party members.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Demeter_Art.jpg)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511615135102795777/demeter-discord.png"
  }
};

module.exports = {
  name: 'demeter',
  description: 'demeter prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};