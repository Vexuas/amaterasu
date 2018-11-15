const embed = {
  "color": 1493680,
  "fields": [
    {
      "name": "Abraxas",
      "value": "```fix\n• 1st Wish             \n• Cactakara Forest\n• Red```"
    },
    {
      "name": "Aelius, Benkei & Kitami",
      "value": "```fix\n• 4th & 6th Wish       \n• Ventos Prairie\n• Red```",
      "inline": true
    },
    {
      "name": "Verdandi, Michaela & Hades",
      "value": "```fix\n• 5th Wish             \n• Emerald Marsh\n• Blue```",
      "inline": true
    },
    {
      "name": "Vayu",
      "value": "```fix\n• 1st Wish             \n• Oblitus Wood\n• Blue```",
      "inline": true
    },
    {
      "name": "Ghodroon",
      "value": "```fix\n• 6th Wish             \n• Oblitus Wood\n• Red```",
      "inline": true
    },
    {
      "name": "Kotonoha",
      "value": "```fix\n• 6th Wish             \n• Starstruck Plateau\n• Yellow```",
      "inline": true
    },
    {
      "name": "Astraea",
      "value": "```fix\n• 2nd Wish             \n• Triatio Highlands\n• Red```",
      "inline": true
    },
    {
      "name": "Cesela",
      "value": "```fix\n• 5th Wish             \n• Emerald Marsh\n• Yellow```",
      "inline": true
    },
    {
      "name": "Zephyrine",
      "value": "```fix\n• 6th Wish             \n• Cactakara Forest\n• Blue```",
      "inline": true
    },
    {
      "name": "Zashi",
      "value": "```fix\n• 6th Wish             \n• Vulture's Vale\n• Yellow```",
      "inline": true
    },
    {
      "name": "Muramasa",
      "value": "```fix\n• 2nd Wish             \n• Cactakara Forest\n• Yellow```",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'dig saturday',
  description: 'digging sites for eidolons',
  day: embed,
  execute(message, args) {
    message.channel.send("Archaeology Prayer Sites on Saturday " + message.author, { embed })
  }
};