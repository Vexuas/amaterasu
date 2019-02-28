module.exports = {
  name: "invite",
  description: "invite link",
  execute(message, args) {
    const embed = {
      description: `${
        message.author
      } | [Add me to your servers! (๑>ᴗ<๑)](https://tinyurl.com/ak-goats-bot)`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
