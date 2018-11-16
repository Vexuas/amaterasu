const embed = {
  "color": 1493680,
  "footer": {
    "text": "Note: This only shows prayers that are Fish Kings & Fish King materials. This does not include White/Green/Orange quality fishes and Fishing sets."
  },
  "fields": [
    {
      "name": "Bel-Chandra",
      "value": "```fix\n• 4th Wish     \n• Rainmist Reach\n• 5AM, 1PM, 9PM```",
      "inline": true
    },
    {
      "name": "Endora, Izanami & Tanith",
      "value": "```fix\n• 4th & 5th Wish\n• Emerald Marsh\n• 5AM, 1PM, 9PM```",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'fish monday',
  description: 'fish king locations for eidolons',
  day: embed,
  execute(message, args) {
    message.channel.send("Fish King Prayer Locations on Monday " + message.author, { embed })
  }
};