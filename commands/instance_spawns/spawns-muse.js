const embed = {
  description: "Muse Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00053.jpg"
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
  name: "spawns muse",
  description: "muse spawns",
  execute(message, args) {
    embed.description = `${message.author} | Muse Spawns`;
    message.channel.send({ embed });
  }
};
