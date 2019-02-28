module.exports = {
  name: "stats",
  description: "prayer stats",
  execute(message, args) {
    const embed = {
      description: `${
        message.author
      } | Bonus stats to character when an eidolon wish has been fulfilled`,
      color: 1493680,
      thumbnail: {
        url: ""
      },
      fields: [
        {
          name: "1st & 2nd Wish",
          value:
            "```fix\n• DMG +36    • CRIT +14\n• SPD +12    • HP +44\n• DEF +6     • EVA +16```",
          inline: true
        },
        {
          name: "3rd & 4th Wish",
          value:
            "```fix\n• DMG +72    • CRIT +28 \n• SPD +22    • HP +88\n• DEF +14    • EVA +40```",
          inline: true
        },
        {
          name: "5th & 6th Wish",
          value:
            "```fix\n• DMG +130   • CRIT +50\n• SPD +42    • HP +158\n• DEF +26    • EVA +66```",
          inline: true
        },
        {
          name: "Total",
          value:
            "```xl\nDMG : 238    CRIT: 92   \nSPD : 76     HP  : 290\nDEF : 46     EVA : 119```",
          inline: true
        }
      ]
    };
    message.channel.send({ embed });
  }
};
