const embed = {
  description: "Eligos Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00010.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Sunday: 12PM, 5PM, 10PM]            ```"
    }
  ]
};

module.exports = {
  name: "spawns eligos",
  description: "eligos spawns",
  execute(message, args) {
    embed.description = `${message.author} | Eligos Spawns`;
    message.channel.send({ embed });
  }
};
