const eidolons = [
  `Abraxas`,
  `Aelius`,
  `Alessa`,
  `Alice`,
  `Alucard`,
  `Amaterasu`,
  `Astraea`,
  `Ayako`,
  `Bahadur`,
  `Bealdor`,
  `Bel-Chandra`,
  `Benkei`,
  `Cerberus`,
  `Cesela`,
  `Cleopawtra`,
  `Cyril`,
  `Dante`,
  `Demeter`,
  `Diao Chan`,
  `Eirene`,
  `Eligos`,
  `Endora`,
  `Eternia`,
  `Faust`,
  `Festival Muramasa`,
  `Ghodroon`,
  `Gigas`,
  `Grimm`,
  `Hades`,
  `Hansel and Gretel`,
  `Harmonia`,
  `Hebe`,
  `Hel`,
  `Hermes`,
  `Idun`,
  `Izanami`,
  `Justicia`,
  `Kaiser Zeta`,
  `Kitami`,
  `Kotonoha`,
  `Kusanagi`,
  `Lumikki`,
  `Maja`,
  `Merrilee`,
  `Michaela`,
  `Muramasa`,
  `Muse`,
  `Nalani`,
  `Nazrudin`,
  `Nidhogg`,
  `Pandora`,
  `Qingniao`,
  `Quelkulan`,
  `Santa Ayako`,
  `Santa Tyr`,
  `Serena`,
  `Serif`,
  `Shirayuki`,
  `Sigrun`,
  `Succubus`,
  `Tanith`,
  `Tigerius Caesar`,
  `Tsubaki`,
  `Tyr`,
  `Undine`,
  `Uriel`,
  `Uzuriel`,
  `Vayu`,
  `Venus`,
  `Verdandi`,
  `Vermilion`,
  `Yarnaros`,
  `Yumikaze`,
  `Zaahir`,
  `Zashi`,
  `Zephyrine`
];
module.exports = {
  name: "eidolons",
  description: "eidolon list",
  execute(message, args) {
    const embed = {
      description: `${
        message.author
      } | There are currently [76](http://www.aurakingdom-db.com/eidolons) Eidolons available in Aura Kingdom OS`,
      color: 1493680,
      fields: [
        {
          name: "Full Eidolon List",
          value: `| ${eidolons
            .map(item => {
              return "`" + item + "`";
            })
            .join(" | ")} |`
        }
      ]
    };
    message.channel.send({ embed });
  }
};
