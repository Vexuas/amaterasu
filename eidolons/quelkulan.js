const embed = {
  "title": "Quelkulan",
  "description": "The dead marshes of Pandemonium are Quelkulan's domain. A powerful electric current courses through this fearsome wyrm's coils, and it can vent an incredibly toxic miasma capable of dissolving flesh and bone, and killing even mystical creatures.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Quelkulan_3_Star.jpg)",
  "color": 8825855,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511435977504587787/quelkulan-discord.png"
  }
};

module.exports = {
  name: 'quelkulan',
  description: 'quelkulan prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};