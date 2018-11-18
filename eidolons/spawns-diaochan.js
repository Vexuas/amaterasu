const embed = {
  "description": "Diao Chan Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00042.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Otherworld: Titan's Root [Party/Hell]\n• Otherworld: Cadilla Felwood [Party/Hell]\n• Frozen Ruins of Zahr-Kazaal                      ```"
    }
  ]
};

module.exports = {
  name: 'spawns diao chan',
  description: 'diao chan spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};