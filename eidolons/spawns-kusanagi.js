const embed = {
  description: "Kusanagi Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00038.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Deep's Cavern [Hell]\n• Otherworld: Candeo Core [Hell]\n• Pyroclastic Purgatory                    ```"
    }
  ]
};

module.exports = {
  name: "spawns kusanagi",
  description: "kusanagi spawns",
  execute(message, args) {
    embed.description = `${message.author} | Kusanagi Spawns`;
    message.channel.send({ embed });
  }
};
