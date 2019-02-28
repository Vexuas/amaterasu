const embed = {
  title: "Alice",
  description:
    "After defeating the Queen of Hearts and saving Wonderland, Alice started her journey in search of true strength, glory, and new friends. When she laid eyes on the Envoy of Gaia, she knew that she finally had found her perfect companion.\n\nIn battle, Alice supports her allies with a powerful cannon that inflicts area damage as well as dealing negative effects on enemies. You'd have to be dumber than Tweedle-Dum to mess with this regicidal menace!",
  color: 16774348,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511538154751393803/alice-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : DMG +8%\n★★☆☆ : CRIT +5%\n★★★☆ : CRIT +10%\n★★★★ : DMG +16%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Eidolon-Alice.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/140-alice)"
    }
  ]
};

module.exports = {
  name: "alice",
  description: "alice info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
