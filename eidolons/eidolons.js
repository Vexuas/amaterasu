const embed = {
  "description": "There are currently [67](http://www.aurakingdom-db.com/eidolons) Eidolons in Aura Kingdom OS",
  "color": 1493680,
  "fields": [
    {
      "name": "Full Eidolon List",
      "value": "• `Abraxas` • `Aelius` • `Alessa` • `Alice` • `Alucard` • `Amaterasu` • `Astraea` • `Ayako` \n• `Bahadur` • `Bealdor` • `Bel-Chandra` • `Benkei` • `Cesela` • `Cleopawtra` • `Cyril`\n• `Dante` • `Demeter` • `Diao Chan` • `Eirene` • `Eligos` • `Endora` • `Eternia` • `Faust`\n• `Ghodroon` • `Gigas` • `Grimm` • `Hades` • `Hansel and Gretel` • `Harmonia` • `Hebe` • `Hel` • `Izanami` • `Justicia` • `Kaiser Zeta` • `Kitami` • `Kotonoha` • `Kusanagi` • `Lumikki`\n• `Maja` • `Merrilee` • `Michaela` • `Muramasa` • `Muse` • `Nalani` • `Nazrudin` • `Pandora`\n• `Quelkulan` • `Serena` • `Serif` • `Shirayuki` • `Sigrun` • `Tanith` • `Tigerius Caesar`\n• `Tsubaki` • `Tyr` • `Undine` • `Uriel` • `Uzuriel` • `Vayu` • `Venus` • `Verdandi`\n• `Vermilion` • `Yarnaros` • `Yumikaze` • `Zaahir` • `Zashi` • `Zephyrine`"
    }
  ]
};

module.exports = {
  name: 'eidolons',
  description: 'eidolon list',
  execute(message, args) {
    message.reply({ embed });
  },
};