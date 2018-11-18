const embed = {
  "title": "Zephyrine",
  "description": "Zephyrine is the sworn protector of Osiris, lord of the underworld. She passes judgment on all souls entering his domain. In battle, she uses her spiritual synergy to replenish allies' stamina.\n\nThrough powerful Nakama, Zephyrine is able to command a fierce army of loyal soldiers. Her ethereal shockwaves weaken the enemy and restore HP to allies. A well-rounded fighter, she can hold her own on the offensive and defensive sides of the battlefield.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Medjed_Herself_2.JPG)",
  "color": 8923110,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511568499639058453/zephyrine-discord.png"
  }
};

module.exports = {
  name: 'zephyrine',
  description: 'zephyrine prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};