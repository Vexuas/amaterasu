const embed = {
  title: 'Elizabeth',
  description:
    "Elizabeth, the proud and beautiful baroness of the Bazoeri Clan, has the appetite of a vampire. She draws on certain gory methods to keep her beauty from fading.\n\nPossessing the power of the dark, Elizabeth's high-speed kicks reduce the Defense of the enemy. Elizabeth's dark power takes the shape of a cloud of bats that viciously bite enemies, leaving them unable to heal and recover. Party members acquire a certain Taste for Blood and steal the HP from the enemy.",
  color: 8923110,
  thumbnail: {
    url:
      'https://cdn.discordapp.com/attachments/580387118166048783/604341353614409730/elizabeth-discord.png'
  },
  fields: [
    {
      name: 'Star Buffs',
      value:
        '```fix\n★☆☆☆ : DMG +8%\n★★☆☆ : Damage of Dark Skills +15%\n★★★☆ : DMG +16%\n★★★★ : Damage of Dark Skills +30%```\n[Artwork](https://aurakingdom.fandom.com/wiki/File:Elizabeth_Artwork_2.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/173-elizabeth)'
    }
  ]
};

module.exports = {
  name: 'elizabeth',
  description: 'elizabeth info',
  execute(message, args) {
    message.channel.send({ embed });
  }
};
