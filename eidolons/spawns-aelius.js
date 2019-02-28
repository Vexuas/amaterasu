const embed = {
  description: "Aelius Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00006.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Tuesday: 12PM, 5PM, 10PM]            ```"
    }
  ]
};

module.exports = {
  name: "spawns aelius",
  description: "aelius spawns",
  execute(message, args) {
    embed.description = `${message.author} | Aelius Spawns`;
    message.channel.send({ embed });
  }
};
