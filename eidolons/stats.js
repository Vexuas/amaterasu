const embed = {
  "description": "Bonus stats to character when an eidolon wish has been fulfilled",
  "color": 1493680,
  "thumbnail": {
    "url": ""
  },
  "fields": [
    {
      "name": "1st Wish + 2nd Wish",
      "value": "```fix\n• DMG +36    • CRIT +14\n• SPD +12    • HP +44\n• DEF +6     • EVA +16```"
    },
    {
      "name": "3rd Wish + 4th Wish",
      "value": "```fix\n• DMG +72    • CRIT +28 \n• SPD +22    • HP +88\n• DEF +14    • EVA +40```"
    },
    {
      "name": "5th Wish + 6th",
      "value": "```fix\n• DMG +130   • CRIT +50\n• SPD +42    • HP +158\n• DEF +26    • EVA +66```"
    },
    {
      "name": "Total",
      "value": "```xl\nDMG : 238    CRIT: 92\nSPD : 76     HP  : 290\nDEF : 46     EVA : 119```"
    }
  ]
};

module.exports = {
  name: 'stats',
  description: 'prayer stats',
  execute(message, args) {
    message.channel.send({ embed });
  },
};