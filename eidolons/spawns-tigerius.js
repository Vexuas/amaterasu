const embed = {
  description: "Tigerius Caesar Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00025.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Saturday: 1AM, 3PM, 8PM]           ```"
    }
  ]
};

module.exports = {
  name: "spawns tigerius caesar",
  description: "tigerius spawns",
  execute(message, args) {
    embed.description = `${message.author} | Tigerius Caesar's Spawns`;
    message.channel.send({ embed });
  }
};
