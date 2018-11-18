const embed = {
  "description": "Hansel and Gretel Spawns",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00040.jpg"
  },
  "fields": [
    {
      "name": "Instances",
      "value": "```css\n• Twilight Forest [Hell]\n• Darkthunder Temple                    ```"
    }
  ]
};

module.exports = {
  name: 'spawns hansel and gretel',
  description: 'hansel spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};