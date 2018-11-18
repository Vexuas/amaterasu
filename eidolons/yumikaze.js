const embed = {
  "title": "Yumikaze",
  "description": "Yumikaze's arrows, fired from her powerful longbow, can pierce any armor. Strong and beautiful, and blessed with the Power of Storms, Yumikaze only fights alongside those she deems worthy.\n\nDue to her longbow's reach, she is a master of ranged combat. When she imbues her arrows with the Power of Storms, they can inflict critical damage on her foes. She can also boost her allies' defenses, allowing them to focus more of their energy on attacks. With her deadly, well-placed arrows, she serves as a powerful ally to the Envoy of Gaia.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Yumikaze_Profile.JPG)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511565179369160704/yumikaze-discord.png"
  }
};

module.exports = {
  name: 'yumikaze',
  description: 'yumikaze prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};