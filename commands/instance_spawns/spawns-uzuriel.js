const embed = {
  description: "Uzuriel Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00013.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Saturday: 12PM, 5PM, 10PM]            ```"
    }
  ]
};

module.exports = {
  name: "spawns uzuriel",
  description: "uzuriel spawns",
  execute(message, args) {
    embed.description = `${message.author} | Uzuriel Spawns`;
    message.channel.send({ embed });
  }
};
