const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("%")

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
        .addField(":hammer_pick: Modérateur \n \n- Ban | Utilisation @ban @user raison \n- Kick | Utilisation @kick @user \n- Clear | Utilisation @clear nombre", ".")
        .addField(".", ".")
        message.channel.send(help_embed)
}

    if (message.content === "fdp"){
        message.delete()
        message.reply("Insulte interdit ! Le Staff te surveilles");
        console.log("Insulte FDP");
    }
});

bot.on('message', function (message) {

    let args = message.content.split(' ')

    if(message.content.startsWith(prefix + "kick")){
        console.log(`${message.author.username} a kick ` + args[1])
        message.delete(1)
        let KickUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))

        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Message de Kick")
        .setColor("#e56b00")
        .addField("Utilisateur :", `${KickUser}`)
        .addField("Kick par", `${message.author}`)
        .addField("Kick dans le Salon :", message.channel)
        .addField("Date", message.createdAt)
        
        const kickerror1 = new Discord.RichEmbed()
            .setTitle("**L'utilisateur n'a pas été trouvé**")
            .setAuthor("Erreur ...", "https://image.noelshack.com/fichiers/2018/33/4/1534450066-une-icone-rouge-avec-un-point-d-exclamation-illustration-de-vecteur-103861060.jpg")
            .setColor('#ff6300')
            .setFooter("Commande demandé par " + message.member.displayName, message.member.user.displayAvatarURL)
        
        const kickerror2 = new Discord.RichEmbed()
            .setTitle("**Vous n'avez pas la permission pour faire ceci.**")
            .setAuthor("Erreur ...", "https://image.noelshack.com/fichiers/2018/33/4/1534450066-une-icone-rouge-avec-un-point-d-exclamation-illustration-de-vecteur-103861060.jpg")
            .setColor('#ff6300')
            .setDescription("*Contacter un administrateur, si vous pensez qu'il y a un problème.*")
            .setFooter("Commande demandé par " + message.member.displayName, message.member.user.displayAvatarURL)
        
        const kickerror3 = new Discord.RichEmbed()
            .setTitle("**Vous ne pouvez pas kick cet utilisateur**")
            .setAuthor("Erreur ...", "https://image.noelshack.com/fichiers/2018/33/4/1534450066-une-icone-rouge-avec-un-point-d-exclamation-illustration-de-vecteur-103861060.jpg")
            .setColor('#ff6300')
            .setFooter("Commande demandé par " + message.member.displayName, message.member.user.displayAvatarURL)
        
        if(!KickUser) return message.channel.send(kickerror1)
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(kickerror2)
        if(KickUser.hasPermission("KICK_MEMBERS")) return message.channel.send(kickerror3)

        message.guild.member(KickUser).kick();
        message.guild.channels.find("name", "sanctions").send(kickEmbed)
    }

    if(message.content.startsWith(prefix + "ban")){
        message.delete(1)
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        let bReason = args.join(" ").slice(28);
        console.log(`${message.author.username} a banni ` + args[1] + " | Raison : " + bReason)
        
        const banerror1 = new Discord.RichEmbed()
            .setTitle("**L'utilisateur n'a pas été trouvé**")
            .setAuthor("Erreur ...", "https://image.noelshack.com/fichiers/2018/33/4/1534450066-une-icone-rouge-avec-un-point-d-exclamation-illustration-de-vecteur-103861060.jpg")
            .setColor('#ff6300')
            .setFooter("Commande demandé par " + message.member.displayName, message.member.user.displayAvatarURL)
        
        const banerror2 = new Discord.RichEmbed()
            .setTitle("**Vous n'avez pas la permission pour faire ceci.**")
            .setAuthor("Erreur ...", "https://image.noelshack.com/fichiers/2018/33/4/1534450066-une-icone-rouge-avec-un-point-d-exclamation-illustration-de-vecteur-103861060.jpg")
            .setColor('#ff6300')
            .setDescription("*Contacter un administrateur, si vous pensez qu'il y a un problème.*")
            .setFooter("Commande demandé par " + message.member.displayName, message.member.user.displayAvatarURL)
        
        const banerror3 = new Discord.RichEmbed()
            .setTitle("**Vous ne pouvez pas banni cet utilisateur**")
            .setAuthor("Erreur ...", "https://image.noelshack.com/fichiers/2018/33/4/1534450066-une-icone-rouge-avec-un-point-d-exclamation-illustration-de-vecteur-103861060.jpg")
            .setColor('#ff6300')
            .setFooter("Commande demandé par " + message.member.displayName, message.member.user.displayAvatarURL)
        
        const banerror4 = new Discord.RichEmbed()
            .setTitle("**Vous devez inserez une raison.**")
            .setAuthor("Erreur ...", "https://image.noelshack.com/fichiers/2018/33/4/1534450066-une-icone-rouge-avec-un-point-d-exclamation-illustration-de-vecteur-103861060.jpg")
            .setColor('#ff6300')
            .setFooter("Commande demandé par " + message.member.displayName, message.member.user.displayAvatarURL)
        
        if(!bUser) return message.channel.send(banerror1)
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(banerror2)
        if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(banerror3)
        if(!bReason) return message.channel.send(banerror4)

        let banEmbed = new Discord.RichEmbed()
        .setDescription("Message de Bannissement")
        .setColor("#bc0000")
        .addField("Utilisateur :", `${bUser}`)
        .addField("Banni par :", `${message.author}`)
        .addField("Banni dans le salon :", message.channel)
        .addField("Date", message.createdAt)
        .addField("Raison :", bReason);

        message.guild.member(bUser).ban(bReason).catch(console.error)
        message.guild.channels.find("name", "sanctions").send(banEmbed)
    }});

bot.on('message', message => {

    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`${args[0]} message ont été supprimés !`);
    })
  }
});

bot.on('message', message => {
    if(message.content[0] === prefix) {
        if(message.content === prefix + 'test') {

            let role = message.guild.roles.find("name", "Membre")
            let user = message.mentions.users.first() || message.author; 

                user.addRole(role)
                user.send("Le rôle membre a était assigné")
}}});
