const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const sunDig = require('./eidolons/dig-sunday');
const monDig = require('./eidolons/dig-monday');
const tueDig = require('./eidolons/dig-tuesday');
const wedDig = require('./eidolons/dig-wednesday');
const thursDig = require('./eidolons/dig-thursday');
const friDig = require('./eidolons/dig-friday');
const satDig = require('./eidolons/dig-saturday');
const sunday = sunDig.day;
const monday = monDig.day;
const tuesday = tueDig.day;
const wednesday = wedDig.day;
const thursday = thursDig.day;
const friday = friDig.day;
const saturday = satDig.day;


const eternia = new Discord.Client();
eternia.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./eidolons').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./eidolons/${file}`);
  eternia.commands.set(command.name, command);
}

eternia.once('ready', () => {
  console.log('Ready!');
});

eternia.on('ready', () => {
  eternia.user.setActivity("$info for help | (~'-')~♥")
});


eternia.login(token);
eternia.on('message', message => {
  if (message.content === "Rio's not here") return message.channel.send("R-really? She forced me to say it! She's actually so smol!! (๑•́ω•̀)");
  if (!message.content.startsWith(prefix)) return;
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

  //digging sites, transfered from dig.js to Eternia.js to solve servertime issues
  if (message.content === "$dig") {
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
    message.channel.send("Archaeology Prayer Sites Today " + message.author, { embed })
  };

  const args = message.content.slice(prefix.length).split();
  const command = args.shift().toLowerCase();

  if (!eternia.commands.has(command)) return message.channel.send("Master " + message.author.username + ", I'm not sure what you meant by that! （・□・；）");

  try {
    eternia.commands.get(command).execute(message, args);
  }
  catch (error) {
    console.error(error);
  }
}); 
