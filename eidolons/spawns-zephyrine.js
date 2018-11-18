const embed = {
  "description": "Zephyrine Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00049.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Subterranean Sanctuary [Hell]\n• Glacial Ice Cavern [Hell]\n• Winged Duke's Domain                 ```"
    }
  ]
};

module.exports = {
  name: 'spawns zephyrine',
  description: 'zephyrine spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};