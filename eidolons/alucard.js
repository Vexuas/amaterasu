const embed = {
  "title": "Alucard",
  "description": "Alucard is a mysterious Eidolon, never before sighted in Terra, Pandemonium, or the Aura Kingdom. He is thought to be a world-walker, and some say his coming heralds calamity for the world. He has a calculating personality and talks down to those he considers lesser beings.\n\nSupremely confident in his power, Alucard whips around his dual blades with tremendous force in his debonair 'human' form. However, it is when he assumes his draconian form that he truly crackles with the power to crush all who stand before him - mortals, spirits, and Eidolons alike.\n[Artwork](http://www.fanpop.com/clubs/aeria-games/images/39632954/title/alucard-photo)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511472801685831699/alucard-discord.png"
  }
};

module.exports = {
  name: 'alucard',
  description: 'alucard prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};