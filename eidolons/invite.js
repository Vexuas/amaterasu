const embed = {
  "title": "Eternia Bot Invite Link",
  "description": "[Add me to your servers! (๑>ᴗ<๑)](https://discordapp.com/oauth2/authorize?&client_id=510980011008983060&scope=bot&permissions=8)",
  "color": 1493680
};

module.exports = {
  name: 'invite',
  description: 'invite link',
  execute(message, args) {
    message.channel.send({ embed });
  },
};