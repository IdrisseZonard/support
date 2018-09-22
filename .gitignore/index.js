const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("@")

bot.on('ready', function() {
    bot.user.setActivity('Prochainement | Crée par Idrisse', { type: 'PLAYING' });
    console.log("Bot lancé | Idrisse");
});

bot.login("NDkzMDU3NzQ5MzIwNzI4NTc2.DofbeA.eHnjqVpmBRVXlkSuWueNymKJfDI");
