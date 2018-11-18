const embed = {
  "description": "Zaahir Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00022.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Infernal Abyss [Solo/Party]         ```"
    }
  ]
};

module.exports = {
  name: 'spawns zaahir',
  description: 'zaahir spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};