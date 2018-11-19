const embed = {
  "title": "Kitami",
  "description": "Yes, she's a revered mystical beast called the God of Battle, but Kitami is actually quite shy. If she pushes past her shyness she can use monstrous strength to protect her friends. Her soul was stirred to action, and she joined the journeys of the Envoys of Gaia.\n\nKitami is dexterous and expertly slashes her claws in melee attacks. An adorable powerhouse, this Eidolon can use her paws to slash enemies and also to heal friends and restore power levels.",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511592245728903169/kitami-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : DMG +8%\n★★☆☆ : EVA +5%\n★★★☆ : DMG +16%\n★★★★ : EVA +10%```\n[Artwork](https://www.facebook.com/AuraKingdom/posts/lets-celebrate-kitamis-arrivaltake-a-screenshot-of-your-character-wearing-its-mo/1647822461959833/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/152-kitami)"
    }
  ]
};

module.exports = {
  name: 'kitami',
  description: 'kitami info',
  execute(message, args) {
    message.reply({ embed });
  },
};