const embed = {
  "title": "Vayu",
  "description": "High above the clouds, Vayu the Stormbringer causes winds to blow and rains and snows to fall. Some attribute to him both droughts and floods, as well as times of great prosperity. When he descends to earth, lesser spirits tremble at his coming.\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511427169801732096/vayu-discord.png"
  }
};

module.exports = {
  name: 'vayu',
  description: 'vayu prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};