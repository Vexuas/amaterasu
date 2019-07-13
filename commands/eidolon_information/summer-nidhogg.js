const embed = {
  title: 'Summer Nidhogg',
  description:
    'Life and hope are the main ingredients in her diet and her thirst for power is beyond any limits.\n\nCracks extend alarmingly and the ground falls apart as Summer Nidhogg wields his Despair Scythe. The powerful breath of the dragon will sustain DPS to the enemy. Awaking the Dragon Force summons a black hole of destruction that makes a deafening sound; this will enhance DMG and Dark Attribute DMG in teammates.',
  color: 8923110,
  thumbnail: {
    url:
      'https://cdn.discordapp.com/attachments/580387118166048783/599524006089195521/summer-nidhogg-discord.png'
  },
  fields: [
    {
      name: 'Star Buffs',
      value:
        '```fix\n★☆☆☆ : CRIT DMG +20%\n★★☆☆ : 5% chance of a double attack\n★★★☆ : CRIT DMG +40%\n★★★★ : 10% chance of a double attack```\n[Artwork](http://maaa0629.blog.fc2.com/category6-11.html) | [Full Profile](http://www.aurakingdom-db.com/eidolon/179-summer-nidhogg)'
    }
  ]
};

module.exports = {
  name: 'summer nidhogg',
  description: 'summer nidhogg info',
  execute(message, args) {
    message.channel.send({ embed });
  }
};
