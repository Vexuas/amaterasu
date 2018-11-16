const embed = {
  "title": "Cyril",
  "description": "Galloping swiftly through field and plain, Cyril wanders the world looking for worthy causes to which he might pledge his aid. Although a just spirit, his blade holds nothing back against evil, and his speed is like the rush of an oncoming storm.\n\nCyril's armor is as hard as a diamond, and is able to withstand the most ferocious attacks. When he strikes with his weapon, the Sword in the Stone, the air itself transforms into Wind Blades that strike and scatter his foes, and his King's Favor skill bolsters his allies' defensive abilities. Clearly, his legendary title, King of the Knights, is well-deserved.\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/attachment/cyril-3-star-front/)",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511440558745583627/cyril-discord.png"
  }
};

module.exports = {
  name: 'cyril',
  description: 'cyril prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};