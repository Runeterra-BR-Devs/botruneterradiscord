const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config();

const prefix = '!';

client.once('ready', () => {
    console.log('ready');

    client.user.setActivity('Flipando Azir level 3');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    const file = './commands/' + command + '.js';

    if(fs.existsSync(file)) {
        require(file)(message, args);
        return;
    }

    message.channel.startTyping();

    setTimeout(() => {
        message.channel.send(require('./utils/not_found')());

        message.channel.stopTyping();
    }, 800);

});


client.login(process.env.DISCORD_BOT_TOKEN);