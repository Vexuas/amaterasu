const embed = {
  "title": "Izanami",
  "description": "Izanami, Lady of Styx, appeared before the Envoy of Gaia in all her glory.\n\nIzanami is constantly escorted by her fellow demons that aid her in battle. Their sharp talons can quickly cut through any enemy's armor and decrease their Defense. Wounds from these attacks bleed constantly and cause continuous damage. Hellfire from the Abyss boosts the motivation among your allies. Izanami is a great partner to have by your side in battle.\n[Artwork](http://aurakingdom.lepei.me/released-future-content/eidolon-izanami/)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511609297625546765/izanami-discord.png"
  }
};

module.exports = {
  name: 'izanami',
  description: 'izanami prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};