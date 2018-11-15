const embed = {
  "color": 1493680,
  "fields": [
    {
      "name": "Ayako",
      "value": "```fix\n• 6th Wish             \n• Silent Ice Field\n• Blue```"
    },
    {
      "name": "Grimm",
      "value": "```fix\n• 1st Wish             \n• Demarech Mines,\n  Star Sand Desert\n• Yellow```",
      "inline": true
    },
    {
      "name": "Abraxas",
      "value": "```fix\n• 1st Wish             \n• Port Skandia,\n  Blizzard Berg\n• Red```",
      "inline": true
    },
    {
      "name": "Cleopawtra",
      "value": "```fix\n• 3rd Wish             \n• Demarech Mines,\n  Star Sand Desert\n• Blue```",
      "inline": true
    },
    {
      "name": "Shirayuki",
      "value": "```fix\n• 4th Wish             \n• Crescent Hill,\n  Candeo Marsh\n• Red```",
      "inline": true
    },
    {
      "name": "Zephyrine",
      "value": "```fix\n• 6th Wish            \n• Port Skandia,\n  Blizzard Berg\n• Blue```",
      "inline": true
    },
    {
      "name": "Muramasa",
      "value": "```fix\n• 2nd Wish            \n• Port Skandia,\n  Blizzard Berg\n• Yellow```",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'dig sunday',
  description: 'digging sites for eidolons',
  day: embed,
  execute(message, args) {
    message.channel.send("Archaeology Prayer Sites on Sunday " + message.author, { embed })
  }
};