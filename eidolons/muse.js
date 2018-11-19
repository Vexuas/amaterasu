const embed = {
  "title": "Muse",
  "description": "A master of art and music, Muse uses her uplifting songs to rally her allies. In order to reach a wider audience with her music, Muse journeyed to the human realm.\n\nWielding the power of divine light, Muse modulates her songs' frequencies to create various effects. They can stun enemies, recover HP for friendly units, and impart other effects, making Muse a highly versatile Eidolon.",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511582039154229250/muse-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : 5% chance of a double attack\n★★☆☆ : Damage against Dark targets +15%\n★★★☆ : 10% chance of a double attack\n★★★★ : Damage against Dark targets +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Muse_Wallpaper_2.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/148-muse)"
    }
  ]
};

module.exports = {
  name: 'muse',
  description: 'muse info',
  execute(message, args) {
    message.reply({ embed });
  },
};