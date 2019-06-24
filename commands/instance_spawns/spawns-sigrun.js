const embed = {
  description: "Sigrun Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00011.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Friday: 12PM, 5PM, 10PM]            ```"
    }
  ]
};

module.exports = {
  name: "spawns sigrun",
  description: "sigrun spawns",
  execute(message, args) {
    embed.description = `${message.author} | Sigrun Spawns`;
    message.channel.send({ embed });
  }
};
