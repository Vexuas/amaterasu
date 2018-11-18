/** const embed = {
  "description": "List of Eidolons that spawn in Instances",
  "color": 1493680,
  "fields": [
    {
      "name": "Otherworld: Port Skandia, Helonia Coast & Crescent Hill",
      "value": "```css\n• Tigerius • Kotonoha • Bahadur • Yarnaros • Quelkulan\n• Vayu • Uzuriel • Bel-Chandra • Sigrun • Eligos\n• Aelius • Gigas```"
    },
    {
      "name": "Tsubaki",
      "value": "```css\n• Deep's Cavern [Hell]\n• Candeo Core [Hell]\n• Ghostweep Cave [Hell]\n• Lament, Landing,\n  Siege [Lv.65 Dragons]  ```",
      "inline": true
    },
    {
      "name": "Serena",
      "value": "```css\n• Ozymand Temple [Hell]\n• Wrathborne Temple [Hell]\n• Lament, Landing,\n  Siege [Lv.65 Dragons]```",
      "inline": true
    },
    {
      "name": "Endora",
      "value": "```css\n• OW: Alabastren Temple,\n      Gydia Glen,\n      Miner's Steppe\n      [Party]\n• Lament, Landing,\n  Siege [Lv.65 Dragons]```",
      "inline": true
    },
    {
      "name": "Vermilion",
      "value": "```css\n• OW: Alabastren Temple,\n      Gydia Glen,\n      Miner's Steppe\n      [Hell]\n• Lament, Landing,\n  Siege [Lv.65 Dragons]```",
      "inline": true
    },
    {
      "name": "Shirayuki",
      "value": "```css\n• Tempestuous Temple\n• Titan's Root [Hell]\n• Cadilla Felwood [Hell]```",
      "inline": true
    },
    {
      "name": "Kaiser Zeta",
      "value": "```css\n• OW: Deep's Cavern,\n      Candeo Core\n      [Party]\n• Tempestuous Temple\n• Pyroclastic Purgatory\n• Titan's Root [Hell]\n• Cadilla Felwood [Hell]```",
      "inline": true
    },
    {
      "name": "Kusanagi",
      "value": "```css\n• OW: Deep's Cavern,\n      Candeo Core\n      [Hell]\n• Pyroclastic Purgatory ```",
      "inline": true
    },
    {
      "name": "Hansel and Gretel",
      "value": "```css\n• Twilight Forest [Hell]\n• Darkthunder Temple```",
      "inline": true
    },
    {
      "name": "Diao Chan",
      "value": "```css\n• OW: Titan's Root,\n      Cadilla Felwood\n      [Party/Hell]\n• Frozen Ruins of\n  Zahr-Kazaal```",
      "inline": true
    },
    {
      "name": "Uriel",
      "value": "```css\n• OW: Titan's Root,\n      Cadilla Felwood\n      [Party/Hell]\n• Sarpa's Forbidden\n  Laboratory [Hell]\n• Tomb of the Ancients[Hell]```",
      "inline": true
    },
    {
      "name": "Amaterasu",
      "value": "```css\n• OW: Twilight Forest\n      [Party/Hell]\n• Sarpa's Forbidden\n  Laboratory [Hell]\n• Tomb of the Ancients[Hell]```",
      "inline": true
    },
    {
      "name": "Alice & Ayako",
      "value": "```css\n• OW: Sarpa's Forbidden Laboratory [Party/Hell]\n      Tomb of the Ancients[Party/Hell]\n• Shattered Netherworld [Hell]\n• Chronowood Cavern [Hell]```"
    },
    {
      "name": "Yumikaze & Zephyrine",
      "value": "```css\n• Winged Duke's Domain\n• Subterranean Sanctuary [Hell]\n• Glacial Ice Cavern [Hell]```",
      "inline": true
    }
  ]
};**/

const embed = {
  "description": "List of Eidolons that spawn in Instances",
  "color": 1493680,
  "fields": [
    {
      "name": "Eidolons Available",
      "value": "• `Tigerius Caesar` • `Kotonoha` • `Bahadur` • `Yarnaros` • `Quelkulan` • `Vayu` \n• `Nazrudin` • `Uzuriel` • `Bel-Chandra` • `Sigrun` • `Eligos` • `Aelius` • `Serena` \n• `Tsubaki` • `Gigas` • `Endora` • `Vermilion` • `Shirayuki` • `Kaiser Zeta` \n• `Kusanagi` • `Hansel and Gretel` • `Ghodroon` • `Diao Chan` • `Uriel` \n• `Amaterasu` • `Nalani` • `Alice` • `Ayako` • `Yumikaze` • `Zephyrine`"
    }
  ]
};


module.exports = {
  name: 'spawns',
  description: 'eido dungeon spawns',
  execute(message, args) {
    message.reply({ embed })
  },
};