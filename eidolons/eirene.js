const embed = {
  title: "Eirene",
  description:
    "Raised amid snowfalls and blizzards, Eirene came to the Envoys of Gaia carrying her songs of peace.\n\nEirene is able to control the power of frost in order to daze her enemies by throwing snowballs at them. The fierce strike stuns the targets, and uses the power of ice crystal to reduce the damage caused by the enemies. This gentle healer will help you to be back on your feet after battling.",
  color: 63999,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511613409847148555/eirene-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Chance to suffer a Crit Hit -25%\n★★☆☆ : Max HP +10%\n★★★☆ : Max HP +20%\n★★★★ : Chance to suffer a Crit Hit -50%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Eirene_Wallpaper.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/161-eirene)"
    }
  ]
};

module.exports = {
  name: "eirene",
  description: "eirene info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
