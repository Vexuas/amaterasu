const embed = {
  "description": "Vermilion Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00031.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Otherworld: Alabastren Temple [Hell]\n• Otherworld: Gydaie Glen [Hell]\n• Otherworld: Miner's Steppe [Hell]\n• Lament of the Thunder-Dragon King\n• Landing of the Sky Dragon King\n• Siege of the Aqua-Dragon Queen                ```"
    }
  ]
};

module.exports = {
  name: 'spawns vermilion',
  description: 'vermilion spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};