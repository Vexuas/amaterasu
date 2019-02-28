const embed = {
  color: 1493680,
  fields: [
    {
      name: "Grimm",
      value:
        "```fix\n• 1st Wish             \n• Demarech Mines, Star Sand Desert\n• Yellow```"
    },
    {
      name: "Eternia",
      value:
        "```fix\n• 6th Wish             • 2nd Wish\n• Desolate Desert,     • Star Sand Desert\n  Starstruck Plateau   • Blue\n• Red```"
    },
    {
      name: "Abraxas",
      value: "```fix\n• 1st Wish             \n• Vulture's Vale\n• Red```",
      inline: true
    },
    {
      name: "Benkei & Yumikaze",
      value: "```fix\n• 4th & 6th Wish       \n• Rainmist Reach\n• Yellow```",
      inline: true
    },
    {
      name: "Vayu",
      value: "```fix\n• 1st Wish             \n• Triatio Highlands\n• Blue```",
      inline: true
    },
    {
      name: "Ghodroon",
      value: "```fix\n• 6th Wish             \n• Triatio Highlands\n• Red```",
      inline: true
    },
    {
      name: "Cleopawtra",
      value: "```fix\n• 3rd Wish             \n• Helonia Coast\n• Blue```",
      inline: true
    },
    {
      name: "Shirayuki",
      value: "```fix\n• 4th Wish             \n• Demarech Mines\n• Red```",
      inline: true
    },
    {
      name: "Idun & Zephyrine",
      value: "```fix\n• 6th Wish             \n• Vulture's Vale\n• Blue```",
      inline: true
    },
    {
      name: "Muramasa",
      value: "```fix\n• 2nd Wish             \n• Vulture's Vale\n• Yellow```",
      inline: true
    }
  ]
};

module.exports = {
  name: "dig tuesday",
  description: "digging sites for eidolons",
  day: embed,
  execute(message, args) {
    (embed.description = `${
      message.author
    } | Archaeology Prayer Sites on Tuesday`),
      message.channel.send({ embed });
  }
};
