const embed = {
  title: 'Summer Alucard',
  description:
    "Summer Alucard's origins are unknown. He doesn't belong either to Terra or to the Pandemonium. Almost no one has heard about him. Rumor has it that he only appears after the sun sets and every night creature fears his appearance; that is why he's named Dragon Tyrant.\n\nSummer Alucard's dual blades are so deadly that they've been nicknamed the Judgment Blade. They can bifurcate time and space. When he's in his human form, his powerful blade makes him undefeatable; but when he turns into a dragon, his power goes beyond every limit and obliterates every enemy in front of him. He knows how powerful he is and this fact makes him a little bit cocky when he's talking to Eidolons.",
  color: 8923110,
  thumbnail: {
    url:
      'https://cdn.discordapp.com/attachments/580387118166048783/599541661810425856/summer-alucard-discord.png'
  },
  fields: [
    {
      name: 'Star Buffs',
      value:
        '```fix\n★☆☆☆ : Normal attack speed +25%\n★★☆☆ : Damage of Dark Skills +15%\n★★★☆ : Normal attack speed +50%\n★★★★ : Damage of Dark Skills +30%```\n[Artwork](http://maaa0629.blog.fc2.com/img/18071804.jpg/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/178-summer-alucard)'
    }
  ]
};

module.exports = {
  name: 'summer alucard',
  description: 'summer alucard info',
  execute(message, args) {
    message.channel.send({ embed });
  }
};
