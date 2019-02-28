const embed = {
  title: "Vermilion",
  description:
    "Living in opulent splendor in a grand palace beyond the spirit realm's southern sky, Vermilion had everything she wanted...except adventure. Taking matters into her own hands, she decided to join forces with a worthy Envoy of Gaia and see the rich tapestry of the mortal world for herself.\n\nWith an affinity for blazing fire and a knack for wide-radius spell blasts, Vermilion is all too happy to dance her way to red-hot victory. She's a wise spirit but a complete newbie to the world of Terra, so she always has a unique perspective on even seemingly mundane events.",
  color: 14687747,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511459984647913494/vermilion-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Crit Damage taken -50%\n★★☆☆ : Damage taken -5%\n★★★☆ : Damage taken -10%\n★★★★ : Chance to suffer a Crit Hit -50%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Vermilion-artwork.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/127-vermilion)"
    }
  ]
};

module.exports = {
  name: "vermilion",
  description: "vermilion info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
