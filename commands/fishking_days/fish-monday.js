const embed = {
  color: 1493680,
  fields: [
    {
      name: "Bel-Chandra",
      value:
        "```fix\n• 4th Wish            \n• Rainmist Reach\n• 5AM, 1PM, 9PM```",
      inline: true
    },
    {
      name: "Endora, Izanami & Tanith",
      value:
        "```fix\n• 4th & 5th Wish      \n• Emerald Marsh\n• 5AM, 1PM, 9PM```",
      inline: true
    }
  ]
};

module.exports = {
  name: "fish monday",
  description: "fish king locations for eidolons",
  day: embed,
  execute(message, args) {
    embed.description = `${
      message.author
    } | Fish King Prayer Locations on Monday`;
    message.channel.send({ embed });
  }
};
