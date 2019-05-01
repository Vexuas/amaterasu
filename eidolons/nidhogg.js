const embed = {
  title: "Nidhogg",
  description:
    "Gnawing away at all life and hope in the darkness. The huge dragon that possesses the power to devour all life and bring about extinction has come into the world.\n\nNidhogg wields the Despair Scythe, causing the ground to split open, decreasing enemy's Move SPD. It strikes its enemies with furious hatred and increases enemy's DMG taken. Nidhogg's Devouring Black Hole has the power to increase party member's DMG.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/573015490432204811/nidhogg-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : DMG +8%\n★★☆☆ : Damage of Dark Skills +15%\n★★★☆ : DMG +16%\n★★★★ : Damage of Dark Skills +30%```\n[Artwork](https://aurakingdom.aeriagames.com/forum/index.php?thread/1794-eidolons-tw/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/168-nidhogg)"
    }
  ]
};

module.exports = {
  name: "nidhogg",
  description: "nidhogg info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
