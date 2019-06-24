const embed = {
  description: "Nalani Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00012.jpg"
  },
  fields: [
    {
      name: "Instances",
      value: "```css\n• Abyss of Light [Solo-Hell]         ```"
    }
  ]
};

module.exports = {
  name: "spawns nalani",
  description: "nalani spawns",
  execute(message, args) {
    embed.description = `${message.author} | Nalani Spawns`;
    message.channel.send({ embed });
  }
};
