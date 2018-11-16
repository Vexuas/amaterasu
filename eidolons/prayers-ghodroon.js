const embed = {
  "description": "Ghodroon's Prayers",
  "color": 1493680,
  "thumbnail": {
    "url": "http://cdn.aurakingdom-db.com/images/icons/P00020.jpg"
  },
  "fields": [
    {
      "name": "1st Wish",
      "value": "[• Sea Bream x1](http://www.aurakingdom-db.com/item/13053-sea-bream)",
      "inline": true
    },
    {
      "name": "2nd Wish",
      "value": "[• Classic Angler's Shoes x1](http://www.aurakingdom-db.com/item/12913-classic-anglers-shoes)",
      "inline": true
    },
    {
      "name": "3rd Wish",
      "value": "[• Electrochemical Alloy x1](http://www.aurakingdom-db.com/item/10504-electrochemical-alloy)\n[• Magical Force Alloy x1](http://www.aurakingdom-db.com/item/10505-magical-force-alloy)",
      "inline": true
    },
    {
      "name": "4th Wish",
      "value": "[• Sweet and Sour Fish x5](http://www.aurakingdom-db.com/item/11630-sweet-and-sour-fish)\n[• Tender Steak x10](http://www.aurakingdom-db.com/item/11641-tender-steak)",
      "inline": true
    },
    {
      "name": "5th Wish",
      "value": "[• Well Preserved Radioactive Stone x5](http://www.aurakingdom-db.com/item/14387-well-preserved-radioactive-stone)\n[• Asheara's Pearl of Wisdom x1](http://www.aurakingdom-db.com/item/12524-ashearas-pearl-of-wisdom)\n[• Talen's Bloodthirsty Gem x1](http://www.aurakingdom-db.com/item/10385-talens-bloodthirsty-gem)",
      "inline": true
    },
    {
      "name": "6th Wish",
      "value": "[• Ghodroon's Key Fragments x5](http://www.aurakingdom-db.com/item/11373-ghodroons-key-fragments)\n[• Top-Quality Rare Mineral x15](http://www.aurakingdom-db.com/item/14126-top-quality-rare-mineral)\n[• Eidolon Energy Crystal x100](http://www.aurakingdom-db.com/item/11049-eidolon-energy-crystal)"
    }
  ]
};

module.exports = {
  name: 'prayers ghodroon',
  description: 'ghodroon prayers',
  execute(message, args) {
    message.reply({ embed });
  },
};