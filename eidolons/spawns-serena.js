const embed = {
  description: "Serena Spawns",
  color: 1493680,
  thumbnail: {
    url: "http://cdn.aurakingdom-db.com/images/icons/P00029.jpg"
  },
  fields: [
    {
      name: "Instances",
      value:
        "```css\n• Ozymand Temple [Hell]\n• Wrathborne Temple [Hell]\n• Lament of the Thunder-Dragon King\n• Landing of the Sky Dragon King\n• Siege of the Aqua-Dragon Queen            ```"
    }
  ]
};

module.exports = {
  name: "spawns serena",
  description: "serena spawns",
  execute(message, args) {
    embed.description = `${message.author} | Serena Spawns`;
    message.channel.send({ embed });
  }
};
