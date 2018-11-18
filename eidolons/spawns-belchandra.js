const embed = {
  "description": "Bel-Chandra Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00016.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Otherworld: Port Skandia [Solo-Hell]\n• Otherworld: Helonia Coast [Solo-Hell]\n• Otherworld: Crescent Hill [Solo-Hell]\n• Guild Hall [Wednesday: 12PM, 5PM, 10PM]            ```"
    }
  ]
};

module.exports = {
  name: 'spawns bel-chandra',
  description: 'bel-chandra spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};