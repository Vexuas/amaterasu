module.exports = {
  name: "release",
  description: "latest release information",
  execute(message, args) {
    const release = "```• Added $contacts command```";
    const embed = {
      description: `${
        message.author
      } | Latest Release: [v1.76](https://github.com/Vexuas/amaterasu/releases)\n${release}`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
