module.exports = {
  name: "contacts",
  description: "platforms to where to contact owner",
  execute(message, args) {
    const contactlist =
      "```• DiscordID: Vexuas#8141\n• In-game(Chimera): Vexuas\n• AKUS Discord Server```";
    const contact = `If you find any missing eidolons/items or or have feedback about the bot, feel free to message me through any of the platforms listed\n${contactlist}`;
    const embed = {
      description: `${contact}`,
      color: 1493680
    };
    message.channel.send({ embed });
  }
};
