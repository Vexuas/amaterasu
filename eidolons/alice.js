const embed = {
  "title": "Alice",
  "description": "After defeating the Queen of Hearts and saving Wonderland, Alice started her journey in search of true strength, glory, and new friends. When she laid eyes on the Envoy of Gaia, she knew that she finally had found her perfect companion.\n\nIn battle, Alice supports her allies with a powerful cannon that inflicts area damage as well as dealing negative effects on enemies. You'd have to be dumber than Tweedle-Dum to mess with this regicidal menace!\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Eidolon-Alice.jpg)",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511538154751393803/alice-discord.png"
  }
};

module.exports = {
  name: 'alice',
  description: 'alice prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};