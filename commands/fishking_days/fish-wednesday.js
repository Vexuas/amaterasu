const embed = {
  color: 1493680,
  fields: [
    {
      name: "Abraxas, Dante, Hermes & Kitami",
      value:
        "```fix\n• 4th & 6th Wish\n• Starstruck Plateau\n• 5AM, 1PM, 9PM```"
    },
    {
      name: "Quelkulan",
      value: "```fix\n• 3rd & 5th Wish\n• Candeo Marsh\n• 5AM, 1PM, 9PM```",
      inline: true
    },
    {
      name: "Shirayuki",
      value: "```fix\n• 5th Wish      \n• Helonia Coast\n• 1AM, 9AM, 5PM```",
      inline: true
    }
  ]
};

module.exports = {
  name: "fish wednesday",
  description: "fish king locations for eidolons",
  day: embed,
  execute(message, args) {
    embed.description = `${
      message.author
    } | Fish King Prayer Locations on Wednesday`;
    message.channel.send({ embed });
  }
};
