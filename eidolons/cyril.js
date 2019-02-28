const embed = {
  title: "Cyril",
  description:
    "Galloping swiftly through field and plain, Cyril wanders the world looking for worthy causes to which he might pledge his aid. Although a just spirit, his blade holds nothing back against evil, and his speed is like the rush of an oncoming storm.\n\nCyril's armor is as hard as a diamond, and is able to withstand the most ferocious attacks. When he strikes with his weapon, the Sword in the Stone, the air itself transforms into Wind Blades that strike and scatter his foes, and his King's Favor skill bolsters his allies' defensive abilities. Clearly, his legendary title, King of the Knights, is well-deserved.",
  color: 7667557,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511440558745583627/cyril-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Damage against Storm targets +15%\n★★☆☆ : Crit Damage taken -50%\n★★★☆ : Crit Damage taken -100%\n★★★★ : Damage against Storm targets +30%```\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/attachment/cyril-3-star-front/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/119-cyril)"
    }
  ]
};
module.exports = {
  name: "cyril",
  description: "cyril info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
