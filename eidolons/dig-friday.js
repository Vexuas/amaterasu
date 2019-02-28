const embed = {
  color: 1493680,
  fields: [
    {
      name: "Astraea",
      value:
        "```fix\n• 2nd Wish             \n• Triatio Highlands, Blizzard Berg\n• Red```"
    },
    {
      name: "Gigas",
      value: "```fix\n• 6th Wish             \n• Rainmist Reach\n• Yellow```",
      inline: true
    },
    {
      name: "Sigrun",
      value: "```fix\n• 6th Wish             \n• Silent Ice Field\n• Yellow```",
      inline: true
    },
    {
      name: "Ghodroon",
      value: "```fix\n• 5th Wish             \n• Rainmist Reach\n• Red```",
      inline: true
    },
    {
      name: "Eternia",
      value: "```fix\n• 2nd Wish             \n• Oblitus Wood\n• Blue```",
      inline: true
    },
    {
      name: "Bahadur",
      value:
        "```fix\n• 6th Wish             \n• Helonia Coast,\n  Demarech Mines\n• Blue```",
      inline: true
    },
    {
      name: "Alucard",
      value:
        "```fix\n• 2nd Wish             \n• Helonia Coast,\n  Demarech Mines\n• Red```",
      inline: true
    }
  ]
};

module.exports = {
  name: "dig friday",
  description: "digging sites for eidolons",
  day: embed,
  execute(message, args) {
    (embed.description = `${
      message.author
    } | Archaeology Prayer Sites on Friday`),
      message.channel.send({ embed });
  }
};
