const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, dbltoken } = require('./config.json');
const sunDig = require('./commands/archaeology_days/dig-sunday');
const monDig = require('./commands/archaeology_days/dig-monday');
const tueDig = require('./commands/archaeology_days/dig-tuesday');
const wedDig = require('./commands/archaeology_days/dig-wednesday');
const thursDig = require('./commands/archaeology_days/dig-thursday');
const friDig = require('./commands/archaeology_days/dig-friday');
const satDig = require('./commands/archaeology_days/dig-saturday');
const sunFish = require('./commands/fishking_days/fish-sunday');
const monFish = require('./commands/fishking_days/fish-monday');
const wedFish = require('./commands/fishking_days/fish-wednesday');
const thursFish = require('./commands/fishking_days/fish-thursday');
const friFish = require('./commands/fishking_days/fish-friday');
const satFish = require('./commands/fishking_days/fish-saturday');
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

const amaterasu = new Discord.Client();
amaterasu.commands = new Discord.Collection();
const DBL = require('dblapi.js');
const dbl = new DBL(dbltoken, amaterasu);

const commandFolder = fs.readdirSync('./commands/');

for (const folder of commandFolder) {
  const commandFiles = fs
    .readdirSync(`./commands/${folder}`)
    .filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    amaterasu.commands.set(command.name, command);
  }
}
amaterasu.once('ready', () => {
  console.log('Ready! (˶◕‿◕˶✿)');
});

const activitylist = [
  "$ama-info for help | (~'-')~♥",
  'Last update: 27/07/2019',
  '$ama-eidolons for full eido list',
  'Eternia coming soon (๑•́ω•̀)',
  'checkout Yagi for wb times!'
];
// REMINDER TO REFACTOR ALL THIS BEFORE Q3 2019 CUZ THIS IS A CLUSTERFCK RIGHT NOW
// 5 more days, maybe I'll make it?
amaterasu.on('ready', () => {
  amaterasu.user.setActivity(activitylist[0]);
  let gaychat = amaterasu.channels.get('188682169495977984'); //Gayhouse - gaychat
  amaterasu.channels.forEach(chan => {
    console.log(chan.id + ' : ' + chan.name); // Channels + Id List
  });
  let count = 0;
  amaterasu.users.forEach(item => {
    count++;
    if (count > 100) {
      return;
    }
    console.log(item.username);
  });
  amaterasu.guilds.forEach(item => {
    console.log(`${item.name} - ${item.region} : ${item.memberCount}`); //Server list details
  });
  /*amaterasu.users.forEach(item => {
    console.log(item.username); //Users List
  });*/
  /*amaterasu.channels.forEach(item => {
    console.log(item.name); //Channels List
  });*/
  setInterval(() => {
    const index = Math.floor(Math.random() * (activitylist.length - 1) + 1);
    amaterasu.user.setActivity(activitylist[index]);
  }, 120000);
  //DiscordBot List server count
  setInterval(() => {
    dbl.postStats(amaterasu.guilds.size);
  }, 1200000);
});

amaterasu.login(token);

amaterasu.on('message', message => {
  //custom reactions without @
  if (message.content.includes("Rio's not here")) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(
        "R-really? She forced me to say it! She's actually so smol!! (๑•́ω•̀)"
      );
    }, 1000);
    return message.channel.stopTyping();
  }
  //custom reaction with @
  if (
    (message.author.username === 'Vexuas' &&
      message.content.includes('hello') &&
      message.content.includes(amaterasu.user)) ||
    (message.author.username === 'Vexuas' &&
      message.content.includes('hi') &&
      message.content.includes(amaterasu.user))
  ) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send('Hi hi, Master Vex! (˶◕‿◕˶✿)');
    }, 1000);
    return message.channel.stopTyping();
  } else if (
    message.author.username === 'Catalina' &&
    message.content.includes(amaterasu.user)
  ) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("H-hi! I don't know what to say yet (๑•̆૩•̆)");
    }, 1000);
    return message.channel.stopTyping();
  } else if (
    (message.author.username === 'Rio' &&
      message.content.includes('hello') &&
      message.content.includes(amaterasu.user)) ||
    (message.author.username === 'Rio' &&
      message.content.includes('hi') &&
      message.content.includes(amaterasu.user))
  ) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send('Oh hello, ArmRest-chan (˶◕‿◕˶✿)');
    }, 1000);
    return message.channel.stopTyping();
  } else if (
    message.author.username !== 'Vexuas' &&
    message.content.includes(amaterasu.user)
  ) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send("U-uhh, thanks! You're nice too! （°o°；）");
    }, 1000);
    return message.channel.stopTyping();
  }

  if (
    (message.content.includes(amaterasu.user) &&
      message.content.includes('are you okay')) ||
    (message.content.includes(amaterasu.user) &&
      message.content.includes('are you alright'))
  ) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(
        'Is anybody actually ever okay in this world? (◕︿◕✿)'
      );
    }, 1000);
    return message.channel.stopTyping();
  } else if (
    (message.content.includes(amaterasu.user) &&
      message.content.includes('sorry')) ||
    (message.content.includes(amaterasu.user) &&
      message.content.includes('apologise'))
  ) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(
        "It's okay Master " +
          message.author.username +
          ', I forgive you. （；・д・）'
      );
    }, 1000);
    return message.channel.stopTyping();
  } else if (
    (message.content.includes(amaterasu.user) &&
      message.content.includes('thank you')) ||
    (message.content.includes(amaterasu.user) &&
      message.content.includes('thanks'))
  ) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(
        "You're nice, Master " + message.author.username + '. (๑>ᴗ<๑)'
      );
    }, 1000);
    return message.channel.stopTyping();
  } else if (message.content.includes(amaterasu.user)) {
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send(
        "Amaterasu doesn't like being pinged, Master " +
          message.author.username +
          '!! (๑•̆૩•̆)'
      );
    }, 1000);
    return message.channel.stopTyping();
  }

  //If no $, do nothing
  if (!message.content.startsWith(prefix)) return;
  //Gets Current Date
  const d = new Date();
  //Converts date into universal time in milliseconds
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  // EST = GMT -5
  const offset = -5;
  //Game Time in milliseconds, universal time + difference in hours from utc(-5)
  const gameTime = utc + 3600000 * offset;
  //Returns a full Date Object of server time
  const serverTime = new Date(gameTime);
  //Format to only time string; 06:42 AM
  const ServerTime = serverTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });
  //Gets day from Date Object, returns a number(0-6)
  const day = serverTime.getDay();

  //digging sites, transfered from dig.js to Amaterasu.js to solve servertime issues
  if (message.content === '$ama-dig') {
    let embed = {};
    if (day === 0) {
      embed = sundayD;
      embed.description =
        message.author +
        ' | ` Sunday, ' +
        ServerTime +
        '`\nArchaeology Prayer Sites Today';
    } else if (day === 1) {
      embed = mondayD;
      embed.description =
        message.author +
        ' | ` Monday, ' +
        ServerTime +
        '`\nArchaeology Prayer Sites Today';
    } else if (day === 2) {
      embed = tuesdayD;
      embed.description =
        message.author +
        ' | ` Tuesday, ' +
        ServerTime +
        '`\nArchaeology Prayer Sites Today';
    } else if (day === 3) {
      embed = wednesdayD;
      embed.description =
        message.author +
        ' | ` Wednesday, ' +
        ServerTime +
        '`\nArchaeology Prayer Sites Today';
    } else if (day === 4) {
      embed = thursdayD;
      embed.description =
        message.author +
        ' | ` Thursday, ' +
        ServerTime +
        '`\nArchaeology Prayer Sites Today';
    } else if (day === 5) {
      embed = fridayD;
      embed.description =
        message.author +
        ' | ` Friday, ' +
        ServerTime +
        '`\nArchaeology Prayer Sites Today';
    } else if (day === 6) {
      embed = saturdayD;
      embed.description =
        message.author +
        ' | ` Saturday, ' +
        ServerTime +
        '`\nArchaeology Prayer Sites Today';
    }
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send({ embed });
    }, 1000);
    message.channel.stopTyping();
  }

  //fishing sites
  if (message.content === '$ama-fish') {
    let embed = {};
    if (day === 0) {
      embed = sundayF;
      embed.description =
        message.author +
        ' | ` Sunday, ' +
        ServerTime +
        '`\nFish King Prayer Locations Today';
    } else if (day === 1) {
      embed = mondayF;
      embed.description =
        message.author +
        ' | ` Monday, ' +
        ServerTime +
        '`\nFish King Prayer Locations Today';
    } else if (day === 2) {
      message.channel.startTyping();
      setTimeout(() => {
        message.channel.send(
          'No Fish King Prayers Today (´･ᴗ･`) ' + message.author
        );
      }, 1000);
      return message.channel.stopTyping();
    } else if (day === 3) {
      embed = wednesdayF;
      embed.description =
        message.author +
        ' | ` Wednesday, ' +
        ServerTime +
        '`\nFish King Prayer Locations Today';
    } else if (day === 4) {
      embed = thursdayF;
      embed.description =
        message.author +
        ' | ` Thursday, ' +
        ServerTime +
        '`\nFish King Prayer Locations Today';
    } else if (day === 5) {
      embed = fridayF;
      embed.description =
        message.author +
        ' | ` Friday, ' +
        ServerTime +
        '`\nFish King Prayer Locations Today';
    } else if (day === 6) {
      embed = saturdayF;
      embed.description =
        message.author +
        ' | ` Saturday, ' +
        ServerTime +
        '`\nFish King Prayer Locations Today';
    }
    message.channel.startTyping();
    setTimeout(() => {
      message.channel.send({ embed });
    }, 1000);
    message.channel.stopTyping();
  }

  //get commands
  const args = message.content.slice(prefix.length).split();
  const command = args.shift().toLowerCase();

  //if command doesn't exist, show error message
  if (!amaterasu.commands.has(command))
    return message.channel.send(
      'Master ' +
        message.author.username +
        ", I'm not sure what you meant by that! （・□・；）"
    );
  //if it does, do command
  try {
    message.channel.startTyping();
    setTimeout(() => {
      amaterasu.commands.get(command).execute(message, args);
    }, 1000);
    return message.channel.stopTyping();
  } catch (error) {
    console.error(error);
  }
});
