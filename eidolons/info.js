const embed = {
  title: "Amaterasu | Info",
  description:
    "Eidolon Bot For Aura Kingdom.\n Initially made as an Eidolon Prayer Guide to remind my lazy self to do them but went ahead and added more functionality.",
  color: 1493680,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/535291698046042112/543825946977763348/Amaterasu-new.png"
  },
  footer: {
    text:
      "If you happen to find missing eidolons/items or mistakes in general, feel free to message me at Vexuas#8141 or contact me through the AKUS discord  (´･ᴗ･`)"
  },
  fields: [
    {
      name: "List of Commands",
      value:
        "**$`info`** : Displays bot information.\n**$`invite`** : Generates invite link.\n**$`eidolons `**  :  Displays all available Eidolons in the server.\n**$`EidolonName`**  :  Displays Eidolon information. \n**$`prayers EidolonName`** : Displays specific Eidolon prayers.\n**$`dig`**  :  Displays current day archaeology sites for Eidolons.\n**$`dig Day`**  :  Displays specific day archaeology sites for Eidolons.\n**$`fish`** :  Displays current day fish kings for Eidolons.\n**$`fish Day`** :  Displays specific day fish kings for Eidolons.\n**$`spawns`** :  Displays Eidolons that can spawn in instances.\n**$`spawns EidolonName`** :  Displays instances of specific Eidolons.\n**$`stats`** : Displays stats from prayers."
    },
    {
      name: "Bot Links",
      value:
        "[Yagi](https://tinyurl.com/ak-goats-bot) - `Aura Kingdom Goats`\n[Eternia]() - `Aura Kingdom Timers`\n[Amaterasu](https://tinyurl.com/ak-eidolons-bot) - `Aura Kingdom Eidolons`"
    }
  ]
};

module.exports = {
  name: "info",
  description: "bot information",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
