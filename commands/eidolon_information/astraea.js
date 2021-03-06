const embed = {
  title: "Astraea",
  description:
    "Having never lost a battle, Astraea has long been renowned as the goddess of victory and war. She's tactically sage and courageous to a fault, though deep down she wishes for nothing but peace. Now, she descends from the heavens in order to protect those whom she holds dear...\n\nIn her right hand, Astraea wields a stalwart lance of silvery pallor that can penetrate the armor of even the toughest opponents. With her left hand, she defends herself with a holy shield of ornate, golden inlay that proves impervious to all attacks. The sacred power of her lance allows her to not only bring down explosive judgment on her enemies, but restore the health of her comrades as well. Astraea never forgets those whom she must protect and those who fight beside her... which is why she has yet to lose a single battle.",
  color: 16774348,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511494009621839893/astraea-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Damage taken -5%\n★★☆☆ : Max HP +10%\n★★★☆ : Max HP +20%\n★★★★ : Damage taken -10%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:AKGoE_Astraea_Wallpaper.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/135-astraea)"
    }
  ]
};

module.exports = {
  name: "astraea",
  description: "astraea info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
