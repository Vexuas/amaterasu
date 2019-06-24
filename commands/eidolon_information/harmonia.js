const embed = {
  title: "Harmonia",
  description:
    "Harmonia's beautiful harp music soothes the savage beast and robs her enemies of the will to fight. Revealing herself only to a select few, the lucky chosen mark meeting her as one of the best moments of their lives.\n\nHarmonia uses music as a ranged weapon against her enemies. The notes she plucks take on physical form and inflict continuous damage. Harmonia's angelic voice can also heal her companions, boost morale, and strengthen the attacks of Envoys of Gaia. She's both a powerful ally and a loyal friend.",
  color: 7667557,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511575522199732273/freya-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : 5% chance of a double attack\n★★☆☆ : Max HP +10%\n★★★☆ : 10% chance of a double attack\n★★★★ : Max HP +20%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Freya_Wallpaper_3.png) | [Full Profile](http://www.aurakingdom-db.com/eidolon/146-harmonia)"
    }
  ]
};
module.exports = {
  name: "harmonia",
  description: "harmonia info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
