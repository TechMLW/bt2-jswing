const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Gives your API with bot",
    run: async(client, message, args) => {
        const msg = await message.channel.send("Pinging ⌚");
        const pinger = new MessageEmbed()
        .setTitle("Ping")
        .setColor("BLUE")
        .setDescription(`The ping is ${client.ws.ping}ms.\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms.`)
        .setThumbnail("https://cdn.discordapp.com/attachments/900396201533403136/905794183778926602/latency.png")
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic:true }))
        .setTimestamp()
        
        msg.edit("Done")
        await message.channel.send({ embeds: [pinger] })
        
    }
}
