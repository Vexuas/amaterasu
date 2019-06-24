const embed = {
  description: "Harmonia Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00051.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Tree Cave [Hell]\n• Obscura Temple [Hell]            \n• Otherworld: Chronowood Cavern [Party/Hell]\n• Otherworld: Shattered Netherworld [Party/Hell]```"
    }
  ]
};

module.exports = {
  name: "spawns harmonia",
  description: "harmonia spawns",
  execute(message, args) {
    embed.description = `${message.author} | Harmonia Spawns`;
    message.channel.send({ embed });
  }
};
