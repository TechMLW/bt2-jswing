const { MessageEmbed }  = require("discord.js");

module.exports = {
    name: "Avatar",
    aliases: ["av", "dp"],
    description: "Shows yours or repliedUser's avatar",
    run: async(client, message, args) => {
        let member = message.mentions.users.first() || message.author;

        let roles = message.mentions.roles;

        const embed = new MessageEmbed()
        .setTitle(`${member.tag}'s avatar`)
        .setColor("AQUA")
        .setImage(member.displayAvatarURL({ format:"png" , size: 1024}))
        .setFooter(`Avatar of ${member.tag}`)
        .setTimestamp()
        
        await message.channel.send({ embeds: [embed] })   
    }
}