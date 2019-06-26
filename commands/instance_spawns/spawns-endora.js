const embed = {
  description: "Endora Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00030.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Otherworld: Alabastren Temple [Party]\n• Otherworld: Gydaie Glen [Party]\n• Otherworld: Miner's Steppe [Party]\n• Lament of the Thunder-Dragon King\n• Landing of the Sky Dragon King\n• Siege of the Aqua-Dragon Queen                ```"
    }
  ]
};

module.exports = {
  name: "spawns endora",
  description: "endora spawns",
  execute(message, args) {
    embed.description = `${message.author} | Endora Spawns`;
    message.channel.send({ embed });
  }
};
