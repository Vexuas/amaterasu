const embed = {
  description: "Yumikaze Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00048.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Subterranean Sanctuary [Hell]\n• Glacial Ice Cavern [Hell]\n• Winged Duke's Domain                 ```"
    }
  ]
};

module.exports = {
  name: "spawns yumikaze",
  description: "yumikaze spawns",
  execute(message, args) {
    embed.description = `${message.author} | Yumikaze Spawns`;
    message.channel.send({ embed });
  }
};
