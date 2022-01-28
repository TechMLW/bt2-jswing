const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "add-item",
    aliases: ["additem"],
    description: "Adds item in shop",
    run: async(client, message, args) => {
        let data = await client.eco.AddItem(message.guild.id, args[0], args[1], args[2])

        if(!message.member.permissions.has("MANAGE_MESSAGES")){
            return message.channel.send("You don't have permissions. Just shut up.")
        }

        if(!args[0]){
            return message.channel.send("Specify an item.")
        }

        await message.channel.send({ embeds: [
            new MessageEmbed()
            .setTitle("Successfully added to shop")
            .setDescription(`${args[0]} has been added successfully for ${args[2]}`)
            .setColor("GREEN")
            .setFooter(`By ${message.author.tag}`, message.author.displayAvatarURL({ format:"png" }))
            .setTimestamp()
        ] })


    }
}