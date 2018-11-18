const embed = {
  "color": 1493680,
  "footer": {
    "text": "Note: This only shows prayers that are Fish Kings & Fish King materials. This does not include White/Green/Orange quality fishes and Fishing sets."
  },
  "fields": [
    {
      "name": "Bel-Chandra",
      "value": "```fix\n• 4th Wish             \n• Rainmist Reach\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Endora, Izanami & Tanith",
      "value": "```fix\n• 4th & 5th Wish       \n• Emerald Marsh\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Abraxas",
      "value": "```fix\n• 2nd & 6th Wish       \n• Oblitus Wood,\n  Starstruck Plateau\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Shirayuki",
      "value": "```fix\n• 5th Wish             \n• Helonia Coast,\n  Ventos Prairie\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Quelkulan",
      "value": "```fix\n• 3rd Wish             \n• Candeo Marsh\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Kitami",
      "value": "```fix\n• 4th Wish             \n• Starstruck Plateau\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Uzuriel & Zashi",
      "value": "```fix\n• 3rd & 4th Wish       \n• Ventos Prairie\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Nalani",
      "value": "```fix\n• 2nd Wish             \n• Crescent Hill\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Cyril",
      "value": "```fix\n• 4th Wish             \n• Cactakara Forest\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Zaahir",
      "value": "```fix\n• 4th Wish             \n• Demarech Mines\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Dante",
      "value": "```fix\n• 5th & 6th Wish       \n• Silent Ice Field,\n  Starstruck Plateau\n• 1PM, 5PM```",
      "inline": true
    },
    {
      "name": "Bahadur",
      "value": "```fix\n• 2nd Wish             \n• Star Sand Desert\n• 1PM, 5PM```",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'fish sunday',
  description: 'fish king locations for eidolons',
  day: embed,
  execute(message, args) {
    message.channel.send("Fish King Prayer Locations on Sunday " + message.author, { embed })
  }
};