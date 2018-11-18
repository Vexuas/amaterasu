const embed = {
  "description": "Shirayuki Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00032.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Tempestuous Temple\n• Titan's Root [Hell]\n• Cadilla Felwood [Hell]                ```"
    }
  ]
};

module.exports = {
  name: 'spawns shirayuki',
  description: 'shirayuki spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};