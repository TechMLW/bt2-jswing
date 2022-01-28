const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "daily",
    description: "Gives daily some money spare",
    run: async(client, message, args) => {
        let user = message.author
        let data = await client.eco.Daily(user.id, message.guild.id) 
        if(data.error == 'ALDREADY_USED'){
            await message.channel.send({ embeds: [new MessageEmbed()
            .setTitle("Your daily is aldready claimed")
            .setDescription("You have aldready claimed ur daily, claim it after 24 hours")
            .setColor("RED")
            .setTimestamp()
            ] })
        } else{
            await message.reply({ embeds: [
                new MessageEmbed()
                .setTitle("claimed daily")
                .setDescription("You claimed your dily now claim ur daily tommorow")
                .setColor("GREEN")
                .setTimestamp()
            ] })
        }
                
    }
}