const embed = {
  "title": "Tanith",
  "description": "A demon warrior from Pandemonium, Tanith finds beauty and liberty in satiating one's own desires. She crossed over to help humans free their hearts from rigid moral codes, promising to show them the pleasure of frenzied battle, and a few other things besides.\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/461611/tanith-039-s-key-of-gaia)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511420845374308370/tanith-discord.png"
  }
};

module.exports = {
  name: 'tanith',
  description: 'tanith prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};