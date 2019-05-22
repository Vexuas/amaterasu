const { amaterasu } = require("../Amaterasu");

module.exports = {
  name: "guilds",
  description: "server details",
  execute(message, args) {
    let guildsArray = [];
    let guildString = "";
    const dismarkup = "`";

    amaterasu.guilds.forEach(guild => {
      guildsArray.push(
        `${dismarkup}${guild.name}${dismarkup} (${guild.region}) : ${
          guild.memberCount
        } members`
      );
    });
    guildsArray.forEach(guild => {
      guildString += `• ${guild}\n`;
    });
    const embed = {
      title: `Total Servers: ${amaterasu.guilds.size}`,
      description: guildString,
      color: 1493680
    };
    message.channel.send(
      message.author.id === "183444648360935424"
        ? { embed }
        : "Sorry, this is a dev command"
    );
  }
};
