const embed = {
  "color": 1493680,
  "fields": [
    {
      "name": "Hebe",
      "value": "```fix\n• 1st Wish             \n• Crescent Hill, Vulture's Vale\n• Red```"
    },
    {
      "name": "Aelius, Benkei & Kitami",
      "value": "```fix\n• 4th & 6th Wish       \n• Star Sand Desert\n• Red```",
      "inline": true
    },
    {
      "name": "Faust",
      "value": "```fix\n• 6th Wish             \n• Emerald Marsh\n• Blue```",
      "inline": true
    },
    {
      "name": "Maja",
      "value": "```fix\n• 5th Wish             \n• Emerald Marsh\n• Yellow```",
      "inline": true
    },
    {
      "name": "Nazrudin",
      "value": "```fix\n• 4th Wish             \n• Port Skandia\n• Blue```",
      "inline": true
    },
    {
      "name": "Serena",
      "value": "```fix\n• 3rd Wish             \n• Candeo Marsh\n• Yellow```",
      "inline": true
    },
    {
      "name": "Kaiser Zeta",
      "value": "```fix\n• 6th Wish             \n• Emerald Marsh\n• Blue```",
      "inline": true
    },
    {
      "name": "Zashi",
      "value": "```fix\n• 6th Wish             \n• Ventos Prairie\n• Yellow```",
      "inline": true
    },
    {
      "name": "Tyr",
      "value": "```fix\n• 5th Wish             \n• Emerald Marsh\n• Yellow```",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'dig thursday',
  description: 'digging sites for eidolons',
  day: embed,
  execute(message, args) {
    message.channel.send("Archaeology Prayer Sites on Thursday " + message.author, { embed })
  }
};