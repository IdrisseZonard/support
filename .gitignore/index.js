const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("@")

bot.on('ready', function() {
    bot.user.setActivity('@help | Crée par Idrisse', { type: 'PLAYING' });
    console.log("Bot lancé | Idrisse");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === prefix + "help") {

        var help_embed = new Discord.RichEmbed()
        .setAuthor("🛠️ Les commandes disponible")
        .setFooter(message.author.username, message.author.avatarURL)
        .setTimestamp()
        .setColor("E26302") //http://www.code-couleur.com
        .addField(".", ".")
        .addField(".", ".")
        message.channel.send(help_embed)
}

    if (message.content === "fdp"){
        message.delete()
        message.reply("Insulte interdit ! Le Staff te surveilles");
        console.log("Insulte FDP");
    }
});

if (msg.startsWith('/avatar')) {
    const user_avatar = message.mentions.users.first();
    const embed_avatar = new Discord.RichEmbed()
        .setTitle(`Avatar de ${user_avatar.username}`)
        .setColor(0xFF0000)
        .setImage(user_avatar.avatarURL);        
    message.channel.send(embed_avatar);
};
