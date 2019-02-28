const embed = {
  color: 1493680,
  fields: [
    {
      name: "Idun, Uzuriel, Shirayuki & Zashi",
      value:
        "```fix\n• 3rd - 5th Wish      \n• Ventos Prairie\n• 5AM, 1PM, 9PM```"
    },
    {
      name: "Nalani",
      value:
        "```fix\n• 2nd Wish            \n• Crescent Hill\n• 1AM, 9AM, 5PM```"
    }
  ]
};

module.exports = {
  name: "fish thursday",
  description: "fish king locations for eidolons",
  day: embed,
  execute(message, args) {
    embed.description = `${
      message.author
    } | Fish King Prayer Locations on Thursday`;
    message.channel.send({ embed });
  }
};
