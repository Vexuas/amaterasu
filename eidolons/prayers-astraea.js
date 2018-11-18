const embed = {
  "description": "Astraea's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00039.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Angler's Fly Fishing Rod x1](http://www.aurakingdom-db.com/item/12787-anglers-fly-fishing-rod)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Well Preserved Cultural Relic x2](http://www.aurakingdom-db.com/item/14108-well-preserved-cultural-relic)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Corrosive Alloy x3](http://www.aurakingdom-db.com/item/10502-corrosive-alloy)\n[• Solid Alloy x3](http://www.aurakingdom-db.com/item/10503-solid-alloy)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Navea Kitchen Set x1](http://www.aurakingdom-db.com/item/15241-navea-kitchen-set)\n[• Navea Soothing Herbs x5](http://www.aurakingdom-db.com/item/11441-navea-soothing-herbs)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Elite Guardian's Grimoire x1](http://www.aurakingdom-db.com/item/11266-elite-guardians-grimoire)\n[• Battlefield Gauntlets x1](http://www.aurakingdom-db.com/item/13264-battlefield-gauntlets)\n[• Battlefield Long Boots x1](http://www.aurakingdom-db.com/item/13265-battlefield-long-boots)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Astraea's Key Fragments x5](http://www.aurakingdom-db.com/item/40362-astraeas-key-fragments)\n[• Sky Tower Sigil x10](http://www.aurakingdom-db.com/item/13531-sky-tower-sigil)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers astraea',
  description: 'astraea prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};