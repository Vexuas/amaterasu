const embed = {
  "title": "Kotonoha",
  "description": "As a nine-tailed fox spirit, Kotonoha wields powerful and esoteric spells with ease, chanting secret mantras to defend her partner, or applying magical wards that greatly enhance combat prowess. Her keen eyes can pierce illusions to see the reality beneath.",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511443359676760064/kotonoha-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Move SPD +5%\n★★☆☆ : EVA +5%\n★★★☆ : EVA +10%\n★★★★ : Move SPD +10%```\n[Artwork](https://www.artstation.com/artwork/yV159) | [Full Profile](http://www.aurakingdom-db.com/eidolon/120-kotonoha)"
    }
  ]
};

module.exports = {
  name: 'kotonoha',
  description: 'kotonoha info',
  execute(message, args) {
    message.reply({ embed });
  },
};