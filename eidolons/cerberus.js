const embed = {
  title: "Cerberus",
  description:
    "A shadowy figure that guards the gates of Pandemonium. He's a Hell Hound that strikes fear into the hearts of any who see him. Cerberus has descended on the world with a grim howl that pierces the night.\n\nCerberus and his brothers attack their targets viciously, rooting the target in place. The fires of Pandemonium have a chance to cause Dual Drive to the target. The Hell Hound summons the protection of Pandemonium to remove negative status effects from the team while increasing their Move SPD.",
  color: 14687747,
  thumbnail: {
    url:
      "https://cdn.discordapp.com/attachments/511245116871278594/573015455053250590/cerberus-discord.png"
  },
  fields: [
    {
      name: "Star Buffs",
      value:
        "```fix\n★☆☆☆ : Normal attack speed +25%\n★★☆☆ : 5% chance of a double attack\n★★★☆ : 10% chance of a double attack\n★★★★ : Normal attack speed +50%```\n[Artwork](https://aurakingdom.aeriagames.com/forum/index.php?thread/1794-eidolons-tw/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/166-cerberus)"
    }
  ]
};

module.exports = {
  name: "cerberus",
  description: "cerberus info",
  execute(message, args) {
    message.channel.send({ embed });
  }
};
