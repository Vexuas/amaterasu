const embed = {
  "description": "Nazrudin Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00018.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Whirlpool Abyss [Solo/Party]         ```"
    }
  ]
};

module.exports = {
  name: 'spawns nazrudin',
  description: 'nazrudin spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};