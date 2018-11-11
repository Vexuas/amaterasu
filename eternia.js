const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json')

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./eidolons').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./eidolons/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('Ready!');
});

client.login(token);

client.on('message', message => {
  if (!message.content === prefix) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift();

  if (!client.commands.has(command)) return;
  try {
    client.commands.get(command).execute(message, args);
  }
  catch (error) {
    console.error(error);
  }
}); 