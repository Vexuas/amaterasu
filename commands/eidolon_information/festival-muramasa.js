const embed = {
  title: "Festival Muramasa",
  description:
    "Festival Muramasa is a Tsukumogami born from the Tachi. The katana in her hand is the source of all misfortune. He is cursed to wander forever among humans hoping he'll ever find her savior.\n\nThe sprite next to Festival Muramasa is her most trusted companion. Together, they slaughter their bewildered enemies, summoning the evil power of the katana to inflict great damage. Festival Muramasa summons a line of hell fire when he is in danger. This pierces the enemy and deals attribute damage of all kinds. It comes in very useful on the battlefield.",
  color: 8923110,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/580387118166048783/585105733754814464/festival-muramasa-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Normal attack speed +25%\n★★☆☆ : 5% chance of a double attack\n★★★☆ : Normal attack speed +50%\n★★★★ : 10% chance of a double attack```\n[Artwork](https://aurakingdom.fandom.com/wiki/Festival_Muramasa/Gallery) | [Full Profile](http://www.aurakingdom-db.com/eidolon/172-festival-muramasa)"
    }
  ]
};

module.exports = {
  name: "festival muramasa",
  description: "festival muramasa info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
