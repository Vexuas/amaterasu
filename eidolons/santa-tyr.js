const embed = {
  "title": "Santa Tyr",
  "description": "Inheriting the name of the one-armed God of War, Christmas Emperor, in the Christmas season, do not forget to continue to train themselves in order to become the strongest god of war. He swore that once he met the only one who has the power that could match his own, he would dedicate everything he has and serve the might existence as a loyal servant.\n\nWith the power of thunder and lightning, Christmas Tiel, with a unique weapon that can be deformed, can exert great power regardless of the distance and distance, and is a source of powerful attack.",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/521596858590822406/santa_tyr-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : DMG +8%\n★★☆☆ : Damage of Lightning Skills +15%\n★★★☆ : DMG +16%\n★★★★ : Damage of Lightning Skills +30%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Christmas_Tyr_1.jpg) | [Full Profile](http://www.aurakingdom-db.com/eidolon/169-santa-tyr)"
    }
  ]
};

module.exports = {
  name: 'santa tyr',
  description: 'santa tyr info',
  execute(message, args) {
    message.reply({ embed });
  },
};