const embed = {
  color: 1493680,
  fields: [
    {
      name: "Diao Chan",
      value:
        "```fix\n• 5th Wish             \n• Emerald Marsh,\n  Frigga Peak\n• Blue```",
      inline: true
    },
    {
      name: "Santa Ayako",
      value: "```fix\n• 6th Wish             \n• Candeo Marsh\n• Blue```",
      inline: true
    },
    {
      name: "Grimm",
      value:
        "```fix\n• 1st Wish             \n• Demarech Mines,\n  Star Sand Desert\n• Yellow```",
      inline: true
    },
    {
      name: "Quelkulan",
      value:
        "```fix\n• 6th Wish             \n• Emerald Marsh,\n  Frigga Peak \n• Red ```",
      inline: true
    },
    {
      name: "Aelius, Benkei & Kitami",
      value: "```fix\n• 4th & 6th Wish       \n• Port Skandia\n• Red```",
      inline: true
    },
    {
      name: "Nalani & Uzuriel",
      value: "```fix\n• 6th Wish             \n• Starstruck Plateau\n• Blue```",
      inline: true
    },
    {
      name: "Nazrudin",
      value: "```fix\n• 4th Wish             \n• Cactakara Forest\n• Blue```",
      inline: true
    },
    {
      name: "Serena",
      value: "```fix\n• 3rd Wish             \n• Candeo Marsh\n• Yellow```",
      inline: true
    },
    {
      name: "Zashi",
      value: "```fix\n• 6th Wish             \n• Crescent Hill\n• Yellow```",
      inline: true
    },
    {
      name: "Hebe",
      value: "```fix\n• 1st Wish             \n• Candeo Marsh\n• Red```",
      inline: true
    }
  ]
};

module.exports = {
  name: "dig monday",
  description: "digging sites for eidolons",
  day: embed,
  execute(message, args) {
    (embed.description = `${
      message.author
    } | Archaeology Prayer Sites on Monday`),
      message.channel.send({ embed });
  }
};
