const embed = {
  "description": "There are currently [71](http://www.aurakingdom-db.com/eidolons) Eidolons in Aura Kingdom OS",
  "color": 1493680,
  "fields": [
    {
      "name": "Full Eidolon List",
      "value": "• `Abraxas` • `Aelius` • `Alessa` • `Alice` • `Alucard` • `Amaterasu` • `Astraea` • `Ayako` \n• `Bahadur` • `Bealdor` • `Bel-Chandra` • `Benkei` • `Cesela` • `Cleopawtra` • `Cyril`\n• `Dante` • `Demeter` • `Diao Chan` • `Eirene` • `Eligos` • `Endora` • `Eternia` • `Faust`\n• `Ghodroon` • `Gigas` • `Grimm` • `Hades` • `Hansel and Gretel` • `Harmonia` • `Hebe` • `Hel` • `Hermes` • `Izanami` • `Justicia` • `Kaiser Zeta` • `Kitami` • `Kotonoha` • `Kusanagi` \n• `Lumikki`• `Maja` • `Merrilee` • `Michaela` • `Muramasa` • `Muse` • `Nalani` • `Nazrudin` \n• `Pandora` • `Quelkulan` • `Santa Ayako` • `Santa Tyr` • `Serena` • `Serif` • `Shirayuki` \n• `Sigrun` • `Succubus` • `Tanith` • `Tigerius Caesar` • `Tsubaki` • `Tyr` • `Undine` \n• `Uriel` • `Uzuriel` • `Vayu` • `Venus` • `Verdandi` • `Vermilion` • `Yarnaros` • `Yumikaze` \n• `Zaahir` • `Zashi` • `Zephyrine`"
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