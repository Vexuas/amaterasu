const embed = {
  title: "Verdandi",
  description:
    "Verdandi, Goddess of Destiny, possesses power over the present. She contentedly lives for the moment and gives little thought to the past or future. Guided by the Cube of Gaia, she and the Envoys of Gaia weave the webs of each other's destinies.\n\nDark magic and rope of destiny in hand, Verdandi is a merciless fighter. By spurring on bloodthirsty Entrancing Butterflies, she reduces both the damage her enemies inflict and removes negative effects suffered by her allies. As powerful as she is charming, this goddess is the perfect partner in battle.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511597767500627970/verdandi-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : CRIT +5%\n★★☆☆ : CRIT DMG +20%\n★★★☆ : CRIT DMG +40%\n★★★★ : CRIT +10%```\n[Artwork](https://aurakingdom.aeriagames.com/itemmall/item/642562/mystery-box-verdandi) | [Full Profile](http://www.aurakingdom-db.com/eidolon/154-verdandi)"
    }
  ]
};

module.exports = {
  name: "verdandi",
  description: "verdandi info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
