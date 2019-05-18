module.exports = {
  name: "release",
  description: "latest release information",
  execute(message, args) {
    const release =
      "```• Add Muse instance spawns\n• Add Zashi instance spawns```";
    const embed = {
      description: `${
        message.author
      } | Latest Release: [v1.77](https://github.com/Vexuas/amaterasu/releases)\n${release}`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
