const embed = {
  "title": "Muse",
  "description": "A master of art and music, Muse uses her uplifting songs to rally her allies. In order to reach a wider audience with her music, Muse journeyed to the human realm.\n\nWielding the power of divine light, Muse modulates her songs' frequencies to create various effects. They can stun enemies, recover HP for friendly units, and impart other effects, making Muse a highly versatile Eidolon.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Muse_Wallpaper_2.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511582039154229250/muse-discord.png"
  }
};

module.exports = {
  name: 'muse',
  description: 'muse prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};