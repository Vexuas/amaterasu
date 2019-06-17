const embed = {
  title: 'Amaterasu | Info',
  description:
    'Eidolon Bot For Aura Kingdom.\n Initially made as an Eidolon Prayer Guide to remind my lazy self to do them but went ahead and added more functionality.',
  color: 1493680,
  thumbnail: {
    url:
      'https://cdn.discordapp.com/attachments/535291698046042112/543825946977763348/Amaterasu-new.png'
  },
  fields: [
    {
      name: 'List of Commands',
      value:
        '$ama-**`info`** : Displays bot information.\n$ama-**`invite`** : Generates invite link.\n$ama-**`eidolons `**  :  Displays all available Eidolons in the server.\n$ama-**`EidolonName`**  :  Displays Eidolon information. \n$ama-**`prayers EidolonName`** : Displays specific Eidolon prayers.\n$ama-**`dig`**  :  Displays current day archaeology sites for Eidolons.\n$ama-**`dig Day`**  :  Displays specific day archaeology sites for Eidolons.\n$ama-**`fish`** :  Displays current day fish kings for Eidolons.\n$ama-**`fish Day`** :  Displays specific day fish kings for Eidolons.\n$ama-**`spawns`** :  Displays Eidolons that can spawn in instances.\n$ama-**`spawns EidolonName`** :  Displays instances of specific Eidolons.\n$ama-**`stats`** : Displays stats from prayers.\n$ama-**`release`** : Displays current release changelog.\n$ama-**`contacts`** : Displays where to contact owner.'
    },
    {
      name: 'Bot Links',
      value:
        '[Yagi](https://tinyurl.com/ak-goats-bot) - `Aura Kingdom Goats`\n[Eternia]() - `Aura Kingdom Timers` - Coming soon!\n[Amaterasu](https://tinyurl.com/ak-eidolons-bot) - `Aura Kingdom Eidolons`'
    }
  ]
};

module.exports = {
  name: 'info',
  description: 'bot information',
  execute(message, args) {
    message.channel.send({ embed });
  }
};
