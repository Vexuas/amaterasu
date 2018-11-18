const embed = {
  "title": "Diao Chan",
  "description": "This alluring beauty hails from the mysterious East and uses her magical fan to command the divine winds. Though many have tried to court her, there is only one whom she truly loves.\n\nIn battle, Diao Chan harnesses the power of the wind to unleash devastating attacks on enemy forces. She can also use her fan to restore her allies' health. In the struggle to help the one she loves, there's nothing Diao Chan won't do.\n[Artwork](https://aurakingdom.aeriagames.com/news/131721/diao-chan-mystery-box)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511509147695448094/diao_chan-discord.png"
  }
};

module.exports = {
  name: 'diao chan',
  description: 'diao chan prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};