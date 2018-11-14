const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json')

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

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (!eternia.commands.has(command)) return message.channel.send("Master " + message.author.username + ", I'm not sure what you meant by that! （・□・；）");
  try {
    eternia.commands.get(command).execute(message, args);
  }
  catch (error) {
    console.error(error);
  }
}); 
