const embed = {
  title: "Zephyrine",
  description:
    "Zephyrine is the sworn protector of Osiris, lord of the underworld. She passes judgment on all souls entering his domain. In battle, she uses her spiritual synergy to replenish allies' stamina.\n\nThrough powerful Nakama, Zephyrine is able to command a fierce army of loyal soldiers. Her ethereal shockwaves weaken the enemy and restore HP to allies. A well-rounded fighter, she can hold her own on the offensive and defensive sides of the battlefield.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/511568499639058453/zephyrine-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Damage of Dark Skills +15%\n★★☆☆ : HEAL +5%\n★★★☆ : HEAL +10%\n★★★★ : Damage of Dark Skills +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Medjed_Herself_2.JPG) | [Full Profile](http://www.aurakingdom-db.com/eidolon/144-zephyrine)"
    }
  ]
};

module.exports = {
  name: "zephyrine",
  description: "zephyrine info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
