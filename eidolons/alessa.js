const embed = {
  "title": "Alessa",
  "description": "A svelte scion of unicorn nobility, Alessa possesses sacred powers that can purify ailments and heal injuries. The regal horn protruding from her forehead isn't just for show, either - she wields it with the deftness of a fencer's blade.",
  "color": 16774348,
  "thumbnail": {
    "url": "http://cms-content.s.aeriastatic.com/a0c101197b8c4856313ac4ad272c2efc/files/aurakingdom/image/e/eid_alessa_01.jpg"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Normal attack speed +25%\n★★☆☆ : 5% chance of a double attack\n★★★☆ : 10% chance of a double attack\n★★★★ : Normal attack speed +50%```\n[Artwork](https://aurakingdom.aeriagames.com/azuria/eidolons) | [Full Profile](http://www.aurakingdom-db.com/eidolon/5-alessa)"
    }
  ]
};

module.exports = {
  name: 'alessa',
  description: 'alessa info',
  execute(message, args) {
    message.reply({ embed });
  },
};