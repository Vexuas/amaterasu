const embed = {
  "title": "Justicia",
  "description": "Justicia oversees that justice is upheld above all else. She wields the power of righteous judgement, and issues fitting punishment to the guilty. She came to join the Envoy of Gaia in her quest for unfaltering justice.\n\nA true expert in firearms of all types, Justicia uses her unmatched firepower to sentence the unrighteous. She frequently switches between weapons to keep her opponents guessing. She acts as an elegant, versatile adversary, sweeping the battlefield with her storehouse of weapons.\n[Artwork](http://aurakingdom.wikia.com/wiki/File:Justitia_Artwork_Wallpaper.jpg)",
  "color": 14687747,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/attachments/511245116871278594/511599717864701953/justicia-discord.png"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "   [• Blue Hardscale Fish x5](http://www.aurakingdom-db.com/item/14460-blue-hardscale-fish)"
    },
    {
      "name": "2nd Wish",
      "value": "   [• Steamy Romance x3](http://www.aurakingdom-db.com/item/11585-steamy-romance)"
    },
    {
      "name": "3rd Wish",
      "value": "   [• Essence of Titanus x1](http://www.aurakingdom-db.com/item/12512-essence-of-titanus)\n   [• Magically Enhanced Muck x5](http://www.aurakingdom-db.com/item/12519-magically-enhanced-muck)"
    },
    {
      "name": "4th Wish",
      "value": "  [• Cruel Tyrant's Cannon x1](http://www.aurakingdom-db.com/item/11257-cruel-tyrants-cannon)\n  [• Warrior's Belt x1](http://www.aurakingdom-db.com/item/11288-warriors-belt)"
    },
    {
      "name": "5th Wish",
      "value": "  [• Superior Swiftness Potion x10](http://www.aurakingdom-db.com/item/12704-superior-swiftness-potion)\n  [• Revelation Gauntlets x1](http://www.aurakingdom-db.com/item/10376-revelation-gauntlets)\n  [• Well Preserved Corroded Ore x10](http://www.aurakingdom-db.com/item/14388-well-preserved-corroded-ore)"
    },
    {
      "name": "6th Wish",
      "value": "  [• Justicia's Key Fragment x5](http://www.aurakingdom-db.com/item/40767-justicias-key-fragment)\n  [• Sigil of the Aqua-Dragon Queen x10](http://www.aurakingdom-db.com/item/13936-sigil-of-the-aqua-dragon-queen)\n  [• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'justicia',
  description: 'justicia prayers',
  execute(message, args) {
    message.channel.send({ embed });
  },
};