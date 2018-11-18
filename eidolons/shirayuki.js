const embed = {
  "title": "Shirayuki",
  "description": "With an impeccable sense of manners and propriety, elegant beauty that holds the gaze of men and women alike, and great skill in poetry and music, Shirayuki has captured the hearts of all in the wintry realm from which she hails. Will those in the mortal realm appreciate her exacting aesthetic tastes?\n\nAble to manipulate snow and ice at her whim, she uses her harsh assault to wear enemies down, but her skill as an entertainer also allows her to bolster the power of her allies. Naturally, Shirayuki finds this elegant balance between offense and defense the most fitting.\n[Artwork](http://www.fanpop.com/clubs/aeria-games/images/39641873/title/shirayuki-photo)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511463982746566666/shirayuki-discord.png"
  }
};

module.exports = {
  name: 'shirayuki',
  description: 'shirayuki prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};