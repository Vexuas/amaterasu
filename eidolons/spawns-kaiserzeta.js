const embed = {
  "description": "Kaiser Zeta Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00034.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Otherworld: Deep's Cavern [Party]\n• Otherworld: Candeo Core [Party]\n• Titan's Root [Hell]\n• Cadilla Felwood [Hell]\n• Tempestuous Temple\n• Pyroclastic Purgatory                      ```"
    }
  ]
};

module.exports = {
  name: 'spawns kaiser zeta',
  description: 'kaiser zeta spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};