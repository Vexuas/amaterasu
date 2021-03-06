const embed = {
  color: 1493680,
  fields: [
    {
      name: 'Idun, Nidhogg & Zephyrine',
      value:
        '```fix\n• 6th Wish            \n• Port Skandia, Blizzard Berg\n• Blue```'
    },
    {
      name: 'Ayako',
      value: '```fix\n• 6th Wish             \n• Silent Ice Field\n• Blue```',
      inline: true
    },
    {
      name: 'Hermes',
      value: '```fix\n• 5th Wish             \n• Desolate Valley\n• Red```',
      inline: true
    },
    {
      name: 'Grimm',
      value:
        '```fix\n• 1st Wish             \n• Demarech Mines,\n  Star Sand Desert\n• Yellow```',
      inline: true
    },
    {
      name: 'Abraxas',
      value:
        '```fix\n• 1st Wish             \n• Port Skandia,\n  Blizzard Berg\n• Red```',
      inline: true
    },
    {
      name: 'Cleopawtra',
      value:
        '```fix\n• 3rd Wish             \n• Demarech Mines,\n  Star Sand Desert\n• Blue```',
      inline: true
    },
    {
      name: 'Shirayuki',
      value:
        '```fix\n• 4th Wish             \n• Crescent Hill,\n  Candeo Marsh\n• Red```',
      inline: true
    },
    {
      name: 'Elizabeth',
      value:
        '```fix\n• 5th Wish             \n• Demarech Mines,\n  Star Sand Desert\n• Red```',
      inline: true
    },
    {
      name: 'Muramasa & Nidhogg',
      value:
        '```fix\n• 2nd Wish            \n• Port Skandia,\n  Blizzard Berg\n• Yellow```',
      inline: true
    }
  ]
};

module.exports = {
  name: 'dig sunday',
  description: 'digging sites for eidolons',
  day: embed,
  execute(message, args) {
    (embed.description = `${
      message.author
    } | Archaeology Prayer Sites on Sunday`),
      message.channel.send({ embed });
  }
};
