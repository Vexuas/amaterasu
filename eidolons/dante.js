const embed = {
  title: "Dante",
  description:
    "It takes a pretty unique individual to anger both heaven and hell. Dante's mad quest for the ultimate power has made him the enemy of the light and the shadow.\n\nWielding a flaming sword imbued with the power of darkness, he channels its infernal energy to devastate all who stand in his way. A master strategist, Dante targets his enemies' weak points to dispatch them as quickly as possible. His astonishing destructive power is almost impossible to escape. The poor few who aren't destroyed instantly start to bleed, suffering from periodic damage. He's a powerful opponent and shouldn't be underestimated.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511571462264717313/dante-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : CRIT DMG +20%\n★★☆☆ : DMG +8%\n★★★☆ : DMG +16%\n★★★★ : CRIT DMG +40%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Lucifer_Wallpaper.png) | [Full Profile](http://www.aurakingdom-db.com/eidolon/145-dante)"
    }
  ]
};

module.exports = {
  name: "dante",
  description: "dante info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
