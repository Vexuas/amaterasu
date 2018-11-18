const embed = {
  "description": "Ayako Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00046.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Otherworld: Sarpa's Forbidden Laboratory [Party/Hell]\n• Otherworld: Tomb of the Ancients [Party/Hell]\n• Shattered Netherworld [Hell]\n• Chronowood Cavern [Hell]```"
    }
  ]
};

module.exports = {
  name: 'spawns ayako',
  description: 'ayako spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};