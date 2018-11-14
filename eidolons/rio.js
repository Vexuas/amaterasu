const { Attachment } = require('discord.js')
const rio = new Attachment('eidolons/rio.png');

module.exports = {
  name: 'rio',
  description: 'rio is tall kappa',
  execute(message, args) {
    message.channel.send("Master Rio is very tall!", rio);
  },
};
