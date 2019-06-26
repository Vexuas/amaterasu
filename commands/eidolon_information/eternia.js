const embed = {
  title: "Eternia",
  description:
    "Eternia, the Goddess of Time, has traversed the full scope of eternity. While she usually exists in our own time as a calmly watchful observer, she is a master of powerful temporal magic, which allows her to restrict her enemies' actions as she bolsters her allies.\n\nEternia fights with a mystical item known as the Eternal Starstone, and casts Space-Time Distortion to immobilize her foes. The same skill can also give her allies time to recover, making her an invaluable ally in any fight.",
  color: 63999,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511562106454147073/eternia-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Damage of Ice Skills +15%\n★★☆☆ : Max HP +10%\n★★★☆ : Max HP +20%\n★★★★ : Damage of Ice Skills +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Eternia_Reading.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/142-eternia)"
    }
  ]
};

module.exports = {
  name: "eternia",
  description: "eternia info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
