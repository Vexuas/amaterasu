module.exports = {
  name: "release",
  description: "latest release information",
  execute(message, args) {
    const release =
      "```• Discord Bot List integration\n• New eidolon Qingniao```";
    const embed = {
      description: `${
        message.author
      } | Latest Release: [v1.78](https://github.com/Vexuas/amaterasu/releases)\n${release}`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
