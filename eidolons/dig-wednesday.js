const embed = {
  "color": 1493680,
  "fields": [
    {
      "name": "Sigrun",
      "value": "```fix\n• 6th Wish             \n• Frigga Peak\n• Yellow```"
    },
    {
      "name": "Bel-Chandra",
      "value": "```fix\n• 6th Wish             \n• Rainmist Reach\n• Red```",
      "inline": true
    },
    {
      "name": "Vayu",
      "value": "```fix\n• 1st Wish             \n• Oblitus Wood\n• Blue```",
      "inline": true
    },
    {
      "name": "Nazrudin",
      "value": "```fix\n• 4th Wish             \n• Cactakara Forest\n• Blue```",
      "inline": true
    },
    {
      "name": "Ghodroon",
      "value": "```fix\n• 6th Wish             \n• Oblitus Wood\n• Red```",
      "inline": true
    },
    {
      "name": "Bahadur",
      "value": "```fix\n• 6th Wish             \n• Candeo Marsh\n• Blue```",
      "inline": true
    },
    {
      "name": "Serena",
      "value": "```fix\n• 3rd Wish             \n• Cactakara Forest\n• Yellow```",
      "inline": true
    },
    {
      "name": "Endora",
      "value": "```fix\n• 4th Wish             \n• Silent Ice Field\n• Yellow```",
      "inline": true
    },
    {
      "name": "Alucard",
      "value": "```fix\n• 2nd Wish             \n• Candeo Marsh\n• Red```",
      "inline": true
    },
    {
      "name": "Uriel",
      "value": "```fix\n• 6th Wish             \n• Silent Ice Field\n• Red```",
      "inline": true
    },
    {
      "name": "Eternia",
      "value": "```fix\n• 2nd Wish             \n• Helonia Coast\n• Blue```",
      "inline": true
    },
    {
      "name": "Justicia",
      "value": "```fix\n• 5th Wish             \n• Rainmist Reach\n• Blue```",
      "inline": true
    },
    {
      "name": "Hebe",
      "value": "```fix\n• 1st Wish             \n• Cactakara Forest\n• Red```",
      "inline": true
    }
  ]
};


module.exports = {
  name: 'dig wednesday',
  description: 'digging sites for eidolons',
  day: embed,
  execute(message, args) {
    message.channel.send("Archaeology Prayer Sites on Wednesday " + message.author, { embed })
  }
};