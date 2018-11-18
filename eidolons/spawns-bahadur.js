const embed = {
  "description": "Bahadur Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00026.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Friday: 1AM, 3PM, 8PM]             ```"
    }
  ]
};

module.exports = {
  name: 'spawns bahadur',
  description: 'bahadur spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};