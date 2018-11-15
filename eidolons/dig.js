//Gets Current Date
const d = new Date();
//Converts date into universal time in milliseconds
const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
// EST = GMT -5
const offset = -5;
//Game Time in milliseconds, universal time + difference in hours from utc(-5)
const gameTime = utc + (3600000 * offset);
//Returns a full Date Object of server time
const serverTime = new Date(gameTime);
//Format to only time string; 06:42 AM 
const ServerTime = serverTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
//Gets day from Date Object, returns a number(0-6)
const day = serverTime.getDay();

let embed = {};
if (day === 0) {
  embed = {
    "description": "Server Time : `" + "Sunday, " + ServerTime + "`",
    "color": 1493680,
    "fields": [
      {
        "name": "Ayako",
        "value": "```fix\n• 6th Wish             \n• Silent Ice Field\n• Blue```"
      },
      {
        "name": "Grimm",
        "value": "```fix\n• 1st Wish             \n• Demarech Mines,\n  Star Sand Desert\n• Yellow```",
        "inline": true
      },
      {
        "name": "Abraxas",
        "value": "```fix\n• 1st Wish             \n• Port Skandia,\n  Blizzard Berg\n• Red```",
        "inline": true
      },
      {
        "name": "Cleopawtra",
        "value": "```fix\n• 3rd Wish             \n• Demarech Mines,\n  Star Sand Desert\n• Blue```",
        "inline": true
      },
      {
        "name": "Shirayuki",
        "value": "```fix\n• 4th Wish             \n• Crescent Hill,\n  Candeo Marsh\n• Red```",
        "inline": true
      },
      {
        "name": "Zephyrine",
        "value": "```fix\n• 6th Wish            \n• Port Skandia,\n  Blizzard Berg\n• Blue```",
        "inline": true
      },
      {
        "name": "Muramasa",
        "value": "```fix\n• 2nd Wish            \n• Port Skandia,\n  Blizzard Berg\n• Yellow```",
        "inline": true
      }
    ]
  };
} else if (day === 1) {
  embed = {
    "description": "Server Time : `" + "Monday, " + ServerTime + "`",
    "color": 1493680,
    "fields": [
      {
        "name": "Diao Chan",
        "value": "```fix\n• 5th Wish             \n• Emerald Marsh, Frigga Peak\n• Blue```"
      },
      {
        "name": "Grimm",
        "value": "```fix\n• 1st Wish             \n• Demarech Mines,\n  Star Sand Desert\n• Yellow```",
        "inline": true
      },
      {
        "name": "Quelkulan",
        "value": "```fix\n• 6th Wish             \n• Emerald Marsh,\n  Frigga Peak \n• Red ```",
        "inline": true
      },
      {
        "name": "Aelius, Benkei & Kitami",
        "value": "```fix\n• 4th & 6th Wish       \n• Port Skandia\n• Red```",
        "inline": true
      },
      {
        "name": "Nalani & Uzuriel",
        "value": "```fix\n• 6th Wish             \n• Starstruck Plateau\n• Blue```",
        "inline": true
      },
      {
        "name": "Nazrudin",
        "value": "```fix\n• 4th Wish             \n• Cactakara Forest\n• Blue```",
        "inline": true
      },
      {
        "name": "Serena",
        "value": "```fix\n• 3rd Wish             \n• Candeo Marsh\n• Yellow```",
        "inline": true
      },
      {
        "name": "Zashi",
        "value": "```fix\n• 6th Wish             \n• Crescent Hill\n• Yellow```",
        "inline": true
      },
      {
        "name": "Hebe",
        "value": "```fix\n• 1st Wish             \n• Candeo Marsh\n• Red```",
        "inline": true
      }
    ]
  };
} else if (day === 2) {
  embed = {
    "description": "Server Time : `" + "Tuesday, " + ServerTime + "`",
    "color": 1493680,
    "fields": [
      {
        "name": "Grimm",
        "value": "```fix\n• 1st Wish             \n• Demarech Mines, Star Sand Desert\n• Yellow```"
      },
      {
        "name": "Eternia",
        "value": "```fix\n• 6th Wish             • 2nd Wish\n• Desolate Desert,     • Star Sand Desert\n  Starstruck Plateau   • Blue\n• Red```"
      },
      {
        "name": "Abraxas",
        "value": "```fix\n• 1st Wish             \n• Vulture's Vale\n• Red```",
        "inline": true
      },
      {
        "name": "Benkei & Yumikaze",
        "value": "```fix\n• 6th Wish             \n• Rainmist Reach\n• Yellow```",
        "inline": true
      },
      {
        "name": "Vayu",
        "value": "```fix\n• 1st Wish             \n• Triatio Highlands\n• Blue```",
        "inline": true
      },
      {
        "name": "Ghodroon",
        "value": "```fix\n• 6th Wish             \n• Triatio Highlands\n• Red```",
        "inline": true
      },
      {
        "name": "Cleopawtra",
        "value": "```fix\n• 3rd Wish             \n• Helonia Coast\n• Blue```",
        "inline": true
      },
      {
        "name": "Shirayuki",
        "value": "```fix\n• 4th Wish             \n• Demarech Mines\n• Red```",
        "inline": true
      },
      {
        "name": "Zephyrine",
        "value": "```fix\n• 6th Wish             \n• Vulture's Vale\n• Blue```",
        "inline": true
      },
      {
        "name": "Muramasa",
        "value": "```fix\n• 2nd Wish             \n• Vulture's Vale\n• Yellow```",
        "inline": true
      }
    ]
  };
} else if (day === 3) {
  embed = {
    "description": "Server Time : `" + "Wednesday, " + ServerTime + "`",
    "color": 1493680,
    "fields": [
      {
        "name": "Sigrun",
        "value": "```fix\n• 6th Wish             \n• Frigga Peak\n• Yellow```"
      },
      {
        "name": "Bel-Chandra",
        "value": "```fix\n• 6th Wish             \n• Rainmist Reach\n• Red```",
        "inline": true
      },
      {
        "name": "Vayu",
        "value": "```fix\n• 1st Wish             \n• Oblitus Wood\n• Blue```",
        "inline": true
      },
      {
        "name": "Nazrudin",
        "value": "```fix\n• 4th Wish             \n• Cactakara Forest\n• Blue```",
        "inline": true
      },
      {
        "name": "Ghodroon",
        "value": "```fix\n• 6th Wish             \n• Oblitus Wood\n• Red```",
        "inline": true
      },
      {
        "name": "Bahadur",
        "value": "```fix\n• 6th Wish             \n• Candeo Marsh\n• Blue```",
        "inline": true
      },
      {
        "name": "Serena",
        "value": "```fix\n• 3rd Wish             \n• Cactakara Forest\n• Yellow```",
        "inline": true
      },
      {
        "name": "Endora",
        "value": "```fix\n• 4th Wish             \n• Silent Ice Field\n• Yellow```",
        "inline": true
      },
      {
        "name": "Alucard",
        "value": "```fix\n• 2nd Wish             \n• Candeo Marsh\n• Red```",
        "inline": true
      },
      {
        "name": "Uriel",
        "value": "```fix\n• 6th Wish             \n• Silent Ice Field\n• Red```",
        "inline": true
      },
      {
        "name": "Eternia",
        "value": "```fix\n• 2nd Wish             \n• Helonia Coast\n• Blue```",
        "inline": true
      },
      {
        "name": "Justicia",
        "value": "```fix\n• 5th Wish             \n• Rainmist Reach\n• Blue```",
        "inline": true
      },
      {
        "name": "Hebe",
        "value": "```fix\n• 1st Wish             \n• Cactakara Forest\n• Red```",
        "inline": true
      }
    ]
  };
} else if (day === 4) {
  embed = {
    "description": "Server Time : `" + "Thursday, " + ServerTime + "`",
    "color": 1493680,
    "fields": [
      {
        "name": "Hebe",
        "value": "```fix\n• 1st Wish             \n• Crescent Hill, Vulture's Vale\n• Red```"
      },
      {
        "name": "Aelius, Benkei & Kitami",
        "value": "```fix\n• 4th & 6th Wish       \n• Star Sand Desert\n• Red```",
        "inline": true
      },
      {
        "name": "Faust",
        "value": "```fix\n• 6th Wish             \n• Emerald Marsh\n• Blue```",
        "inline": true
      },
      {
        "name": "Maja",
        "value": "```fix\n• 5th Wish             \n• Emerald Marsh\n• Yellow```",
        "inline": true
      },
      {
        "name": "Nazrudin",
        "value": "```fix\n• 4th Wish             \n• Port Skandia\n• Blue```",
        "inline": true
      },
      {
        "name": "Serena",
        "value": "```fix\n• 3rd Wish             \n• Candeo Marsh\n• Yellow```",
        "inline": true
      },
      {
        "name": "Kaiser Zeta",
        "value": "```fix\n• 6th Wish             \n• Emerald Marsh\n• Blue```",
        "inline": true
      },
      {
        "name": "Zashi",
        "value": "```fix\n• 6th Wish             \n• Ventos Prairie\n• Yellow```",
        "inline": true
      },
      {
        "name": "Tyr",
        "value": "```fix\n• 5th Wish             \n• Emerald Marsh\n• Yellow```",
        "inline": true
      }
    ]
  };
} else if (day === 5) {
  embed = {
    "description": "Server Time : `" + "Friday, " + ServerTime + "`",
    "color": 1493680,
    "fields": [
      {
        "name": "Astraea",
        "value": "```fix\n• 2nd Wish             \n• Triatio Highlands, Blizzard Berg\n• Red```"
      },
      {
        "name": "Gigas",
        "value": "```fix\n• 6th Wish             \n• Rainmist Reach\n• Yellow```",
        "inline": true
      },
      {
        "name": "Sigrun",
        "value": "```fix\n• 6th Wish             \n• Silent Ice Field\n• Yellow```",
        "inline": true
      },
      {
        "name": "Ghodroon",
        "value": "```fix\n• 5th Wish             \n• Rainmist Reach\n• Red```",
        "inline": true
      },
      {
        "name": "Eternia",
        "value": "```fix\n• 2nd Wish             \n• Oblitus Wood\n• Blue```",
        "inline": true
      },
      {
        "name": "Bahadur",
        "value": "```fix\n• 6th Wish             \n• Helonia Coast,\n  Demarech Mines\n• Blue```",
        "inline": true
      },
      {
        "name": "Alucard",
        "value": "```fix\n• 2nd Wish             \n• Helonia Coast,\n  Demarech Mines\n• Red```",
        "inline": true
      }
    ]
  };
} else if (day === 6) {
  embed = {
    "description": "Server Time : `" + "Saturday, " + ServerTime + "`",
    "color": 1493680,
    "fields": [
      {
        "name": "Abraxas",
        "value": "```fix\n• 1st Wish             \n• Cactakara Forest\n• Red```"
      },
      {
        "name": "Aelius, Benkei & Kitami",
        "value": "```fix\n• 4th & 6th Wish       \n• Ventos Prairie\n• Red```",
        "inline": true
      },
      {
        "name": "Verdandi, Michaela & Hades",
        "value": "```fix\n• 5th Wish             \n• Emerald Marsh\n• Blue```",
        "inline": true
      },
      {
        "name": "Vayu",
        "value": "```fix\n• 1st Wish             \n• Oblitus Wood\n• Blue```",
        "inline": true
      },
      {
        "name": "Ghodroon",
        "value": "```fix\n• 6th Wish             \n• Oblitus Wood\n• Red```",
        "inline": true
      },
      {
        "name": "Kotonoha",
        "value": "```fix\n• 6th Wish             \n• Starstruck Plateau\n• Yellow```",
        "inline": true
      },
      {
        "name": "Astraea",
        "value": "```fix\n• 2nd Wish             \n• Triatio Highlands\n• Red```",
        "inline": true
      },
      {
        "name": "Cesela",
        "value": "```fix\n• 5th Wish             \n• Emerald Marsh\n• Yellow```",
        "inline": true
      },
      {
        "name": "Zephyrine",
        "value": "```fix\n• 6th Wish             \n• Cactakara Forest\n• Blue```",
        "inline": true
      },
      {
        "name": "Zashi",
        "value": "```fix\n• 6th Wish             \n• Vulture's Vale\n• Yellow```",
        "inline": true
      },
      {
        "name": "Muramasa",
        "value": "```fix\n• 2nd Wish             \n• Cactakara Forest\n• Yellow```",
        "inline": true
      }
    ]
  };
};



module.exports = {
  name: 'dig',
  description: 'digging sites for eidolons',
  execute(message, args) {
    message.channel.send("Archaeology Prayer Sites Today " + message.author, { embed })
  }
};