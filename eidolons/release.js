module.exports = {
  name: 'release',
  description: 'latest release information',
  execute(message, args) {
    const release = '```• Temporary change to prefix```';
    const embed = {
      description: `${
        message.author
      } | Latest Release: [v1.80](https://github.com/vexuas/amaterasu/releases)\n${release}`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
