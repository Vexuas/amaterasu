const embed = {
  description: "List of Eidolons that spawn in Instances",
  color: 1493680,
  fields: [
    {
      name: "Eidolons Available",
      value:
        "• `Tigerius Caesar` • `Kotonoha` • `Bahadur` • `Yarnaros` • `Quelkulan` • `Vayu` \n• `Nazrudin` • `Uzuriel` • `Bel-Chandra` • `Sigrun` • `Eligos` • `Aelius` • `Serena` \n• `Tsubaki` • `Gigas` • `Endora` • `Vermilion` • `Shirayuki` • `Kaiser Zeta` \n• `Kusanagi` • `Hansel and Gretel` • `Ghodroon` • `Diao Chan` • `Uriel` \n• `Amaterasu` • `Nalani` • `Alice` • `Ayako` • `Yumikaze` • `Zephyrine` • `Harmonia` • `Dante`"
    }
  ]
};

module.exports = {
  name: "spawns",
  description: "eido dungeon spawns",
  execute(message, args) {
    embed.description = `${
      message.author
    } | List of Eidolons that spawn in Instances`;
    message.channel.send({ embed });
  }
};
