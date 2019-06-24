const embed = {
  description: "Zashi Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00054.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Dawn Passage [Hell]\n• Silent Ancient Castle [Hell]         ```"
    }
  ]
};

module.exports = {
  name: "spawns zashi",
  description: "zashi spawns",
  execute(message, args) {
    embed.description = `${message.author} | Zashi Spawns`;
    message.channel.send({ embed });
  }
};
