const embed = {
  "title": "Justicia",
  "description": "Justicia oversees that justice is upheld above all else. She wields the power of righteous judgement, and issues fitting punishment to the guilty. She came to join the Envoy of Gaia in her quest for unfaltering justice.\n\nA true expert in firearms of all types, Justicia uses her unmatched firepower to sentence the unrighteous. She frequently switches between weapons to keep her opponents guessing. She acts as an elegant, versatile adversary, sweeping the battlefield with her storehouse of weapons.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Justitia_Artwork_Wallpaper.jpg)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511599717864701953/justicia-discord.png"
  }
};

module.exports = {
  name: 'justicia',
  description: 'justicia prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};