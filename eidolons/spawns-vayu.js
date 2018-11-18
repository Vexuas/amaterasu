const embed = {
  "description": "Vayu Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00017.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Sunday: 1AM, 3PM, 8PM]             ```"
    }
  ]
};

module.exports = {
  name: 'spawns vayu',
  description: 'vayu spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};