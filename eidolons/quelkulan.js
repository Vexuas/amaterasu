const embed = {
  "title": "Quelkulan",
  "description": "The dead marshes of Pandemonium are Quelkulan's domain. A powerful electric current courses through this fearsome wyrm's coils, and it can vent an incredibly toxic miasma capable of dissolving flesh and bone, and killing even mystical creatures.",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511435977504587787/quelkulan-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Move SPD +5%\n★★☆☆ : Crit Damage taken -50%\n★★★☆ : Crit Damage taken -100%\n★★★★ : Move SPD +10%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Quelkulan_3_Star.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/117-quelkulan)"
    }
  ]
};

module.exports = {
  name: 'quelkulan',
  description: 'quelkulan info',
  execute(message, args) {
    message.reply({ embed });
  },
};