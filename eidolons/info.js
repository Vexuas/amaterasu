const embed = {
  "title": "Eternia || Info",
  "description": "Eidolon Prayers Guide For Aura Kingdom.\n Made on the sole intention to remind my lazy self to do them.\n[Full list of prayers](http://www.aurakingdom-db.com/charts/eidolon-wishes)\n[Invite Link](https://discordapp.com/oauth2/authorize?&client_id=510980011008983060&scope=bot&permissions=8)",
  "color": 63999,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/248430185463021569/511047719851130890/discord_eternia.jpg"
  },
  "fields": [
    {
      "name": "List of Commands",
      "value": "**$eidolons**  :  Displays all available Eidolons in the server.\n**$EidolonName**  :  Displays specific Eidolon prayers (e.g.: $Merilee).\n**$dig**  :  Displays current day archaeology sites for specific Eidolons.\n**$fish** :  Displays current day fish kings for specific Eidolons."
    },
    {
      "name": "Contact",
      "value": "If you happen to find missing eidolons or mistakes in general, do feel free to add `Vexuas#8141` or contact me through the official AKUS Discord."
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