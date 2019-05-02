module.exports = {
  name: "release",
  description: "latest release information",
  execute(message, args) {
    const release = "```• Added Cerberus\n• Added Nidhogg```";
    const embed = {
      description: `${message.author} | Latest Release: v1.74\n${release}`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
