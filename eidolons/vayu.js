const embed = {
  "title": "Vayu",
  "description": "High above the clouds, Vayu the Stormbringer causes winds to blow and rains and snows to fall. Some attribute to him both droughts and floods, as well as times of great prosperity. When he descends to earth, lesser spirits tremble at his coming.",
  "color": 16774348,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511427169801732096/vayu-discord.png"
  },
  "fields": [
    {
      "name": "Star Buffs",
      "value": "```fix\n★☆☆☆ : Damage against Holy targets +15%\n★★☆☆ : Convert 1% of damage dealt by skills into HP* \n★★★☆ : Convert 2% of damage dealt by skills into HP* \n★★★★ : Damage against Holy targets +30% ```Note: *This is 80% less effective against Boss Monsters of certain Multiplayer instances.\n\n[Artwork](http://aurakingdom.lepei.me/downloads/eidolons-wallpaper/) | [Full Profile](http://www.aurakingdom-db.com/eidolon/113-vayu)"
    }
  ]
};
module.exports = {
  name: 'vayu',
  description: 'vayu info',
  execute(message, args) {
    message.reply({ embed });
  },
};