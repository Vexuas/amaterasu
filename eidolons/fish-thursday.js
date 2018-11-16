const embed = {
  "color": 1493680,
  "footer": {
    "text": "Note: This only shows prayers that are Fish Kings & Fish King materials. This does not include White/Green/Orange quality fishes and Fishing sets."
  },
  "fields": [
    {
      "name": "Uzuriel, Shirayuki & Zashi",
      "value": "```fix\n• 3rd - 5th Wish\n• Ventos Prairie\n• 5AM, 1PM, 9PM```",
      "inline": true
    },
    {
      "name": "Nalani",
      "value": "```fix\n• 2nd Wish      \n• Crescent Hill\n• 1AM, 9AM, 5PM```",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'fish thursday',
  description: 'fish king locations for eidolons',
  day: embed,
  execute(message, args) {
    message.channel.send("Fish King Prayer Locations on Thursday " + message.author, { embed })
  }
};