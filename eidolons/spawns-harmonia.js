const embed = {
  "description": "Harmonia Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00051.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Tree Cave [Hell]\n• Obscura Temple [Hell]            ```"
    }
  ]
};

module.exports = {
  name: 'spawns harmonia',
  description: 'harmonia spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};