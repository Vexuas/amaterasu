const embed = {
  color: 1493680,
  fields: [
    {
      name: "Abraxas",
      value: "```fix\n• 2nd Wish     \n• Oblitus Wood\n• 5AM, 1PM, 9PM```"
    },
    {
      name: "Cyril",
      value: "```fix\n• 4th Wish      \n• Cactakara Forest\n• 1AM, 9AM, 5PM```",
      inline: true
    },
    {
      name: "Dante",
      value: "```fix\n• 5th Wish      \n• Silent Ice Field\n• 5AM, 1PM, 9PM```",
      inline: true
    }
  ]
};

module.exports = {
  name: "fish friday",
  description: "fish king locations for eidolons",
  day: embed,
  execute(message, args) {
    embed.description = `${
      message.author
    } | Fish King Prayer Locations on Friday`;
    message.channel.send({ embed });
  }
};
