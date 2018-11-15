const sun = require('./dig-sunday');
const mon = require('./dig-monday');
const tue = require('./dig-tuesday');
const wed = require('./dig-wednesday');
const thurs = require('./dig-thursday');
const fri = require('./dig-friday');
const sat = require('./dig-saturday');
const sunday = sun.day;
const monday = mon.day;
const tuesday = tue.day;
const wednesday = wed.day;
const thursday = thurs.day;
const friday = fri.day;
const saturday = sat.day;

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
  embed = sunday;
  embed.description = "Server Time : ` Sunday, " + ServerTime + "`";
} else if (day === 1) {
  embed = monday;
  embed.description = "Server Time : ` Monday, " + ServerTime + "`";
} else if (day === 2) {
  embed = tuesday;
  embed.description = "Server Time : ` Tuesday, " + ServerTime + "`";
} else if (day === 3) {
  embed = wednesday;
  embed.description = "Server Time : ` Wednesday, " + ServerTime + "`";
} else if (day === 4) {
  embed = thursday;
  embed.description = "Server Time: `Thursday, " + ServerTime + "`";
} else if (day === 5) {
  embed = friday;
  embed.description = "Server Time: ` Friday, " + ServerTime + "`";
} else if (day === 6) {
  embed = saturday;
  embed.description = "Server Time: ` Saturday, " + ServerTime + "`";
};


module.exports = {
  name: 'dig',
  description: 'digging sites for eidolons',
  execute(message, args) {
    message.channel.send("Archaeology Prayer Sites Today " + message.author, { embed })
  }
};