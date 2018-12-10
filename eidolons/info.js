const embed = {
  "title": "Eternia || Info",
  "description": "Eidolon Bot For Aura Kingdom.\n Initially made as an Eidolon Prayer Guide to remind my lazy self to do them but went ahead and added more functionality.\n[Invite Link](https://discordapp.com/oauth2/authorize?&client_id=510980011008983060&scope=bot&permissions=8)",
  "color": 1493680,
  "footer": {
    "text": "If you happen to find missing eidolons/items or mistakes in general, feel free to message Vexuas#8141 or contact me through the AKUS Discord.  (´･ᴗ･`) Last Update: 10/12/2018"
  },
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511047719851130890/discord_eternia.jpg"
  },
  "fields": [
    {
      "name": "List of Commands",
      "value": "**$`info`** : Displays bot information.\n**$`invite`** : Generates invite link.\n**$`eidolons `**  :  Displays all available Eidolons in the server.\n**$`EidolonName`**  :  Displays Eidolon information. \n**$`prayers EidolonName`** : Displays specific Eidolon prayers.\n**$`dig`**  :  Displays current day archaeology sites for Eidolons.\n**$`dig Day`**  :  Displays specific day archaeology sites for Eidolons.\n**$`fish`** :  Displays current day fish kings for Eidolons.\n**$`fish Day`** :  Displays specific day fish kings for Eidolons.\n**$`spawns`** :  Displays Eidolons that can spawn in instances.\n**$`spawns EidolonName`** :  Displays instances of specific Eidolons.\n**$`stats`** : Displays stats from prayers.\n\n```fix\nType $ at the beginning of any command: $Merrilee, $prayers Merrilee, $stats .. ```"
    }
  ]
};

module.exports = {
  name: 'info',
  description: 'bot information',
  execute(message, args) {
    message.channel.send({ embed });
  },
};