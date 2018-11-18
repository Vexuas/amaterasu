const embed = {
  "description": "Yarnaros Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00019.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Thursday: 1AM, 3PM, 8PM]             ```"
    }
  ]
};

module.exports = {
  name: 'spawns yarnaros',
  description: 'yarnaros spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};