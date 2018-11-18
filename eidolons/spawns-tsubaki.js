const embed = {
  "description": "Tsubaki Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00027.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Deep's Cavern [Hell]\n• Candeo Core [Hell]\n• Ghostweep Cave [Hell]\n• Lament of the Thunder-Dragon King\n• Landing of the Sky Dragon King\n• Siege of the Aqua-Dragon Queen            ```"
    }
  ]
};

module.exports = {
  name: 'spawns tsubaki',
  description: 'tsubaki spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};