module.exports = {
  name: 'release',
  description: 'latest release information',
  execute(message, args) {
    const release = '```• Add Elizabeth```';
    const embed = {
      description: `${
        message.author
      } | Latest Release: [v1.83](https://github.com/vexuas/amaterasu/releases)\n${release}`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
