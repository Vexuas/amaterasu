const embed = {
  "title": "Diao Chan",
  "description": "This alluring beauty hails from the mysterious East and uses her magical fan to command the divine winds. Though many have tried to court her, there is only one whom she truly loves.\n\nIn battle, Diao Chan harnesses the power of the wind to unleash devastating attacks on enemy forces. She can also use her fan to restore her allies' health. In the struggle to help the one she loves, there's nothing Diao Chan won't do.",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511509147695448094/diao_chan-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Damage taken -5%\n★★☆☆ : Max HP +10%\n★★★☆ : Max HP +20%\n★★★★ : Damage taken -10%```\n[Artwork](https://aurakingdom.aeriagames.com/news/131721/diao-chan-mystery-box) | [Full Profile](http://www.aurakingdom-db.com/eidolon/137-diao-chan)"
    }
  ]
};

module.exports = {
  name: 'diao chan',
  description: 'diao chan info',
  execute(message, args) {
    message.reply({ embed });
  },
};