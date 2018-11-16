const embed = {
  "color": 1493680,
  "footer": {
    "text": "Note: This only shows prayers that are Fish Kings & Fish King materials. This does not include White/Green/Orange quality fishes and Fishing sets."
  },
  "fields": [
    {
      "name": "Zaahir",
      "value": "```fix\n• 4th Wish      \n• Demarech Mines\n• 1AM, 9AM, 5PM```",
      "inline": true
    },
    {
      "name": "Bahadur",
      "value": "```fix\n• 2nd Wish      \n• Star Sand Desert\n• 5AM, 1PM, 9PM```",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'fish saturday',
  description: 'fish king locations for eidolons',
  day: embed,
  execute(message, args) {
    message.channel.send("Fish King Prayer Locations on Saturday " + message.author, { embed })
  }
};