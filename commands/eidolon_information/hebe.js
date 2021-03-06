const embed = {
  title: "Hebe",
  description:
    "Hebe is not only the Goddess of Youth but also a talented musician. The sound of her harp can touch your very soul. She spreads her youthful vitality wherever she goes. She decides to go and see the Envoy of Gaia in order to understand mortal coil better.\n\nHebe's Harp is also pretty useful in combat. A few notes from her harp can freeze her enemies over and let them completely unable to move. She can also choose to tune a different melody that decreases the enemy's attack. Finally, Hebe's music can also heal her allies and restore their HP.",
  color: 63999,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511611536540827673/hebe-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Max HP +10%\n★★☆☆ : Damage taken -5%\n★★★☆ : Damage taken -10%\n★★★★ : Max HP +20%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Hebe_Artwork_Wallpaper.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/160-hebe)"
    }
  ]
};

module.exports = {
  name: "hebe",
  description: "hebe info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
