const embed = {
  description: "Alice Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00045.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Sarpa's Forbidden Laboratory [Party/Hell]\n• Otherworld: Tomb of the Ancients [Party/Hell]\n• Shattered Netherworld [Hell]\n• Chronowood Cavern [Hell]```"
    }
  ]
};

module.exports = {
  name: "spawns alice",
  description: "alice spawns",
  execute(message, args) {
    embed.description = `${message.author} | Alice Spawns`;
    message.channel.send({ embed });
  }
};
