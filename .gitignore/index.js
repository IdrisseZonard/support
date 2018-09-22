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
        .addField(":cop: Modération \n \n-Ban | Utilisation -ban @user raison \n- Kick | Utilisation #kick @user \n- Clear | Utilisation #clear <nombre> \n", ".")
        .addField(":bust_in_silhouette: Joueur \n \n- Aide | Utilisation #help \n- Informations Discord | Utilisation #infodiscord \n- Server List | Utilisation #serverlist \n- Ping | Utilisation #ping \n- Createur  | Utilisation #createur", ".")
        .addField("🎮 Les jeux \n \n- Garry's Mod | Utilisation #gmod \n- CSGO | Utilisation #csgo \n- Arma 3 | Utilisation #arma3 \n- Rust | Utilisation #rust", ".")
        member.user.send(help_embed)
}

    if (message.content === "fdp"){
        message.delete()
        message.reply("Insulte interdit ! Le Staff te surveilles");
        console.log("Insulte FDP");
    }
});


