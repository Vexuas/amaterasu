module.exports = {
  name: "release",
  description: "latest release information",
  execute(message, args) {
    const release = "```• New eidolon Festival Muramasa```";
    const embed = {
      description: `${
        message.author
      } | Latest Release: [v1.79](https://github.com/Vexuas/amaterasu/releases)\n${release}`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
