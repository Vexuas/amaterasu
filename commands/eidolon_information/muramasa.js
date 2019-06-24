const embed = {
  title: "Muramasa",
  description:
    "Muramasa is a Tsukumogami born from the Tachi. The Tachi in their hand is the source of all misfortune. Muramasa is always wandering among humans, hoping to find their saviour.\n\nThe sprite next to Muramasa is the most reliable company. Muramasa and the sprite kills enemies with their tachi and summon the evil spirit from the katana to eliminate negative status. While in urgent danger, Muramasa will summon the inferno fire to kill the enemies. It is a really powerful help.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511604604190982182/muramasa-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Damage of Dark Skills +15%\n★★☆☆ : DMG +8%\n★★★☆ : DMG +16%\n★★★★ : Damage of Dark Skills +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Muramasa_Wallpaper_2.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/157-muramasa)"
    }
  ]
};

module.exports = {
  name: "muramasa",
  description: "muramasa info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
