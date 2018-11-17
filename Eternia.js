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
const sunFish = require('./eidolons/fish-sunday');
const monFish = require('./eidolons/fish-monday');
const wedFish = require('./eidolons/fish-wednesday');
const thursFish = require('./eidolons/fish-thursday');
const friFish = require('./eidolons/fish-friday');
const satFish = require('./eidolons/fish-saturday');
const sundayD = sunDig.day;
const mondayD = monDig.day;
const tuesdayD = tueDig.day;
const wednesdayD = wedDig.day;
const thursdayD = thursDig.day;
const fridayD = friDig.day;
const saturdayD = satDig.day;
const sundayF = sunFish.day;
const mondayF = monFish.day;
const wednesdayF = wedFish.day;
const thursdayF = thursFish.day;
const fridayF = friFish.day;
const saturdayF = satFish.day;


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
  //custom reactions without @
  if (message.content.includes("Rio's not here")) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("R-really? She forced me to say it! She's actually so smol!! (๑•́ω•̀)");
    }, 1000);
    return message.channel.stopTyping();
  }
  //custom reaction with @
  if (message.author.username === "Vexuas" && message.content.includes("I love you") && message.content.includes(eternia.user)) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("I love you too, Master Vex! (˶◕‿◕˶✿)");
    }, 1000);
    return message.channel.stopTyping();
  } else if (message.author.username === "Catalina" && message.content.includes(eternia.user)) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("H-hi! I don't know what to say yet (๑•̆૩•̆)");
    }, 1000);
    return message.channel.stopTyping();
  } else if (message.author.username === "Rio" && message.content.includes("I love you") && message.content.includes(eternia.user)) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("I love you too, ArmRest-chan (˶◕‿◕˶✿)");
    }, 1000);
    return message.channel.stopTyping();
  } else if (message.author.username !== "Vexuas" && message.author.username !== "Rio" && message.content.includes("I love you") && message.content.includes(eternia.user)) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("U-uhh, thanks! You're nice too! （°o°；）");
    }, 1000);
    return message.channel.stopTyping();
  };

  if (message.content.includes("are you okay") || message.content.includes("are you alright") && message.content.includes(eternia.user)) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("Is anybody actually ever okay in this world? (◕︿◕✿)");
    }, 1000);
    return message.channel.stopTyping();
  } else if (message.content.includes("sorry") || message.content.includes("apologise") && message.content.includes(eternia.user)) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("It's okay Master " + message.author.username + ", I forgive you. （；・д・）");
    }, 1000);
    return message.channel.stopTyping();
  } else if (message.content.includes("thank you") || message.content.includes("thanks") && message.content.includes(eternia.user)) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("You're nice, Master " + message.author.username + ". (๑>ᴗ<๑)");
    }, 1000);
    return message.channel.stopTyping();
  } else if (message.content.includes(eternia.user)) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("Eternia doesn't like being pinged, Master " + message.author.username + "!! (๑•̆૩•̆)");
    }, 1000);
    return message.channel.stopTyping();
  }


  //If no $, do nothing
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
      embed = sundayD;
      embed.description = "Server Time : ` Sunday, " + ServerTime + "`";
    } else if (day === 1) {
      embed = mondayD;
      embed.description = "Server Time : ` Monday, " + ServerTime + "`";
    } else if (day === 2) {
      embed = tuesdayD;
      embed.description = "Server Time : ` Tuesday, " + ServerTime + "`";
    } else if (day === 3) {
      embed = wednesdayD;
      embed.description = "Server Time : ` Wednesday, " + ServerTime + "`";
    } else if (day === 4) {
      embed = thursdayD;
      embed.description = "Server Time: `Thursday, " + ServerTime + "`";
    } else if (day === 5) {
      embed = fridayD;
      embed.description = "Server Time: ` Friday, " + ServerTime + "`";
    } else if (day === 6) {
      embed = saturdayD;
      embed.description = "Server Time: ` Saturday, " + ServerTime + "`";
    };
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("Archaeology Prayer Sites Today " + message.author, { embed })
    }, 1000);
    message.channel.stopTyping();
  };

  //fishing sites
  if (message.content === "$fish") {
    let embed = {};
    if (day === 0) {
      embed = sundayF;
      embed.description = "Server Time : ` Sunday, " + ServerTime + "`";
    } else if (day === 1) {
      embed = mondayF;
      embed.description = "Server Time : ` Monday, " + ServerTime + "`";
    } else if (day === 2) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send("No Fish King Prayers Today (´･ᴗ･`)" + message.author);
      }, 1000);
      message.channel.stopTyping();
    } else if (day === 3) {
      embed = wednesdayF;
      embed.description = "Server Time : ` Wednesday, " + ServerTime + "`";
    } else if (day === 4) {
      embed = thursdayF;
      embed.description = "Server Time: `Thursday, " + ServerTime + "`";
    } else if (day === 5) {
      embed = fridayF;
      embed.description = "Server Time: ` Friday, " + ServerTime + "`";
    } else if (day === 6) {
      embed = saturdayF;
      embed.description = "Server Time: ` Saturday, " + ServerTime + "`";
    };
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("Fish King Prayer Locations Today " + message.author, { embed });
    }, 1000);
    message.channel.stopTyping();
  };

  //get commands
  const args = message.content.slice(prefix.length).split();
  const command = args.shift().toLowerCase();

  //if command doesn't exist, show error message
  if (!eternia.commands.has(command)) return message.channel.send("Master " + message.author.username + ", I'm not sure what you meant by that! （・□・；）");
  //if it does, do command
  try {
    message.channel.startTyping();
    setTimeout(() => {
      eternia.commands.get(command).execute(message, args);
    }, 1000);
    return message.channel.stopTyping();
  }
  catch (error) {
    console.error(error);
  }
}); 
