const embed = {
  description: "Uriel Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00043.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Titan's Root [Party/Hell]\n• Otherworld: Cadilla Felwood [Party/Hell]\n• Sarpa's Forbidden Laboratory [Hell]\n• Tomb of the Ancients [Hell]                      ```"
    }
  ]
};

module.exports = {
  name: "spawns uriel",
  description: "uriel spawns",
  execute(message, args) {
    embed.description = `${message.author} | Uriel Spawns`;
    message.channel.send({ embed });
  }
};
