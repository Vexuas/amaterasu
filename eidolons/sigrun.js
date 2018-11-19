const embed = {
  "title": "Sigrun",
  "description": "Sigrun is a mighty warrior-maiden who combs battlefields for the souls of the fallen. She escorts the spirits of dead heroes to a plane beyond the mortal world and avenges the deaths of noble warriors who have been wrongfully slain.",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511412247327932436/sigrun-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Crit Damage taken -50%\n★★☆☆ : DEF +5%\n★★★☆ : DEF +10%\n★★★★ : Crit Damage taken -100%```\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/107-sigrun)"
    }
  ]
};

module.exports = {
  name: 'sigrun',
  description: 'sigrun info',
  execute(message, args) {
    message.reply({ embed });
  },
};