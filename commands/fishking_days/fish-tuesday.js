module.exports = {
  name: "fish tuesday",
  description: "fish king locations for eidolons",
  execute(message, args) {
    const embed = {
      description: `${message.author} | No Fish King Prayers on Tuesdays`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
