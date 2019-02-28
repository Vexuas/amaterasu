const embed = {
  title: "Succubus",
  description:
    "The demon figure that appears during midnight dreams like charming people's dreams as entertainment, in order to find the best dreams to come to this world.\n\nSuccubus tempts the enemy with a enchanting posture, makes the enemy confused and out of consciousness, and draws vital energy from the enemy. It is inspired by the charm of the succubus and can make teammates immune to all damage. The temptation in a night dream is something that you can't resist.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/521593795662446612/succubus-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : DMG +8%\n★★☆☆ : 5% chance of a double attack\n★★★☆ : DMG +16%\n★★★★ : 10% chance of a double attack```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Succubus_Wallpaper_1.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/165-succubus)"
    }
  ]
};

module.exports = {
  name: "succubus",
  description: "succubus info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
