const embed = {
  "title": "Kusanagi",
  "description": "Kusanagi is the sword spirit of the creator god Amaterasu. Legend says that whoever obtains her will conquer all things under heaven. Amaterasu sent Kusanagi to Terra to help those who would seek to save the world.\n\nKusanagi transformed herself into a sword spirit with a tremendous appitude for battle. She can carry out storm attacks on large numbers of enemies. When rallying together with an Envoy of Gaia, she can launch a destructive laser cannon attack over a broad area. A deep-seated confidence (some would say overconfidence) spurs her to challenge formidable opponents, because she knows that each battle will only make her stronger.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Kusanagi-gracevalhalla.png)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511489416376614912/kusanagi-discord.png"
  }
};

module.exports = {
  name: 'kusanagi',
  description: 'kusanagi prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};