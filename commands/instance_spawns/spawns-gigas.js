const embed = {
  description: "Gigas Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00005.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Thursday: 12PM, 5PM, 10PM]            ```"
    }
  ]
};

module.exports = {
  name: "spawns gigas",
  description: "gigas spawns",
  execute(message, args) {
    embed.description = `${message.author} | Gigas Spawns`;
    message.channel.send({ embed });
  }
};
