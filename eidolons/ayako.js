const embed = {
  "title": "Ayako",
  "description": "Lured by Terra's culinary delights, Ayako has decided to join forces with the Envoys of Gaia. She appears in the form of an adorable wolf pup. Ayako has an insatiable appetite. Her dream is to gorge on all the delicious food Terra has to offer.\n\nImbued with the power of frost, Ayako moves swiftly across the battlefield to intercept the enemy and control the pace of the fight.\n[Artwork](http://www.fanpop.com/clubs/aeria-games/images/39632987/title/fenrir-ayako-photo)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511554414423834645/ayako-discord.png"
  }
};

module.exports = {
  name: 'ayako',
  description: 'ayako prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};