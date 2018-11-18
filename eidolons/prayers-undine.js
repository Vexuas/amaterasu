const embed = {
  "description": "Undine's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00058.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Small Squid x10](http://www.aurakingdom-db.com/item/13015-small-squid)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Speed of Beebis x10](http://www.aurakingdom-db.com/item/12714-speed-of-beebis)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Spicy Pickled Herring x10](http://www.aurakingdom-db.com/item/11631-spicy-pickled-herring)\n[• Fish with Mushroom Sauce x5](http://www.aurakingdom-db.com/item/11551-fish-with-mushroom-sauce)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Stanley's Demon Stomping Boots x1]( http://www.aurakingdom-db.com/item/11319-stanleys-demon-stomping-boots)\n[• Murfeo's Winged Necklace x1](http://www.aurakingdom-db.com/item/12468-murfeos-winged-necklace)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Overlord's Grimoire x1](http://www.aurakingdom-db.com/item/14956-overlords-grimoire)\n[• Stalwart Commander's Helmet x1](http://www.aurakingdom-db.com/item/14996-stalwart-commanders-helmet)\n[• Stalwart Commander's Armor x1](http://www.aurakingdom-db.com/item/14997-stalwart-commanders-armor)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Undine's Key Fragment x5](http://www.aurakingdom-db.com/item/40752-undines-key-fragment)\n[• Guardian's Last Breath x10](http://www.aurakingdom-db.com/item/12562-guardians-last-breath)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)",
      "inline": true
    }
  ]
};

module.exports = {
  name: 'prayers undine',
  description: 'undine prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};