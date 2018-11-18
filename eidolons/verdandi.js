const embed = {
  "title": "Verdandi",
  "description": "Verdandi, Goddess of Destiny, possesses power over the present. She contentedly lives for the moment and gives little thought to the past or future. Guided by the Cube of Gaia, she and the Envoys of Gaia weave the webs of each other's destinies.\n\nDark magic and rope of destiny in hand, Verdandi is a merciless fighter. By spurring on bloodthirsty Entrancing Butterflies, she reduces both the damage her enemies inflict and removes negative effects suffered by her allies. As powerful as she is charming, this goddess is the perfect partner in battle.\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/642562/mystery-box-verdandi)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511597767500627970/verdandi-discord.png"
  }
};

module.exports = {
  name: 'verdandi',
  description: 'verdandi prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};