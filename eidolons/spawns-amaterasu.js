const embed = {
  description: "Amaterasu Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00044.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Twilight Forest [Party/Hell]\n• Sarpa's Forbidden Laboratory [Hell]\n• Tomb of the Ancients [Hell]                      ```"
    }
  ]
};

module.exports = {
  name: "spawns amaterasu",
  description: "amaterasu spawns",
  execute(message, args) {
    embed.description = `${message.author} | Amaterasu Spawns`;
    message.channel.send({ embed });
  }
};
