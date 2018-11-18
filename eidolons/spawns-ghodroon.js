const embed = {
  "description": "Ghodroon Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00020.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Avarice Abyss [Solo-Hell]         ```"
    }
  ]
};

module.exports = {
  name: 'spawns ghodroon',
  description: 'ghodroon spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};