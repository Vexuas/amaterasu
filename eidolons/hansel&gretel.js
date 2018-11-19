const embed = {
  "title": "Hansel and Gretel",
  "description": "Hansel and Gretel were drawn to Terra via the Power of Gaia. With the blessing of the forest at their command, they harness the energy of storm and wind. Hansel possesses a keen sense of smell and the ability to vanquish gigantic foes. Gretel, on the other hand, is gifted with tremendous healing abilities.\n\nWhen they blow their horn, they are able to restore their allies' health, allowing them to keep fighting the good fight.",
  "color": 7667557,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511491608840241152/hanselgretel-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : CRIT +5%\n★★☆☆ : 5% chance of a double attack\n★★★☆ : 10% chance of a double attack\n★★★★ : CRIT +10%```\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Hansel_%26_Gretel_Wallpaper.png) | [Full Profile](http://www.aurakingdom-db.com/eidolon/134-hansel-and-gretel)"
    }
  ]
};

module.exports = {
  name: 'hansel and gretel',
  description: 'hansel info',
  execute(message, args) {
    message.reply({ embed });
  },
};