const embed = {
  description: "Dante Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00050.jpg"
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
  name: "spawns dante",
  description: "dante spawns",
  execute(message, args) {
    embed.description = `${message.author} | Dante Spawns`;
    message.channel.send({ embed });
  }
};
