const embed = {
  description: "Kotonoha Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00024.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Monday: 12PM, 5PM, 10PM]           ```"
    }
  ]
};

module.exports = {
  name: "spawns kotonoha",
  description: "kotonoha spawns",
  execute(message, args) {
    embed.description = `${message.author} | Kotonoha Spawns`;
    message.channel.send({ embed });
  }
};
