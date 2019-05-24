const embed = {
  title: "Qingniao",
  description:
    "The elegant Qingniao's wings were torn from her by a deceiver, but thanks to the Envoy of Gaia, her once-broken heart beats again.\n\nQingniao captures enemies with the bird cage and stuns them. It continuously drops stormy feathers, inflicting DPS. Qingniao summons the hidden power of true happiness. You can almost see its lost winds as it bestows blessings. It increases party members' Move SPD.",
  color: 7667557,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/580387118166048783/581502800496689163/qingniao_discordt.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : DEF +5%\n★★☆☆ : Damage of Storm Skills +15%\n★★★☆ : DEF +10%\n★★★★ : Damage of Storm Skills +30%```\n[Artwork](https://aurakingdom.fandom.com/wiki/File:Qingniao_Art.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/171-qingniao)"
    }
  ]
};

module.exports = {
  name: "qingniao",
  description: "qingniao info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
