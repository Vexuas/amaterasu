const embed = {
  title: "Bahadur",
  description:
    "In the vast wildernesses of Terra, Bahadur roams far afield, seeking wars and strong challengers to quell his lust for battle. As a centaur, few spirits can match the speed of his trampling gallop, and fewer still are willing to face his thunderous charge.",
  color: 14687747,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511448915871137814/bahadur-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Chance to suffer a Crit Hit -25%\n★★☆☆ : Convert 1% of damage dealt by skills into HP*\n★★★☆ : Convert 2% of damage dealt by skills into HP* \n★★★★ : Chance to suffer a Crit Hit -50%```Note: *This is 80% less effective against Boss Monsters of certain Multiplayer instances.\n\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/attachment/3-star-bahadur-front-2/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/122-bahadur)"
    }
  ]
};

module.exports = {
  name: "bahadur",
  description: "bahadur info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
