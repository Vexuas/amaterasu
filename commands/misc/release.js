module.exports = {
  name: 'release',
  description: 'latest release information',
  execute(message, args) {
    const release =
      '```Patch 53-54\n• New instance spawns for Zashi & Muse\n• Unrelated but better code structuring```';
    const embed = {
      description: `${
        message.author
      } | Latest Release: [v1.81](https://github.com/vexuas/amaterasu/releases)\n${release}`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
