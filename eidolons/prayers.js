module.exports = {
  name: "prayers",
  description: "prayers info",
  execute(message, args) {
    message.channel.send(
      "Type `$prayers EidolonName` to get an eidolon's prayers like this! `$prayers Merrilee` (* >ω<)"
    );
  }
};
