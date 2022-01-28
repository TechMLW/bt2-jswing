const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bal",
  aliases:["balance", "money"],
  description:"Shows your balance",
  run: async(client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    let wallet = await client.eco.GetBal(user.id, message.guild.id)
    let bank = await client.eco.GetBankBal(user.id, message.guild.id)

    const balse = new MessageEmbed()
    .setTitle(`${user.username}'s Bal`)
    .setColor("YELLOW")
    .setThumbnail("https://cdn.discordapp.com/attachments/900396201533403136/915809280911872020/money.png")
    .setDescription(`💳**Wallet**: ${wallet}\n🏦**Bank**: ${bank}\n🌐**Total Net Worth**: ${ wallet + bank }`)
    .setFooter(`Asked by ${message.author.tag}`, message.author.displayAvatarURL({ format:"png" }))
    .setTimestamp()

    await message.channel.send({ embeds: [balse] })
  }
}