const { isApplicationCommandDMInteraction } = require("discord-api-types/utils/v9");
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "add-money",
    aliases: ["addmoney"],
    description: "Adds money to a user",
    run: async (client, message, args) => {
		if (!message.member.permissions.has('MANAGE_MESSAGES'))
			return message.channel.send(
				`You dont have Permission to use this Command`
			);
		var user = message.mentions.users.first();
		if (!user) {
			return message.channel.send(`PLEASE MENTION A USER TO ADD OR REMOVE MONEY`);
		}
		let data = await client.eco.AddMoney(user.id, message.guild.id, args[1]);
        // if(isNaN(args[0])){
        //     return message.channel.send("PLS GIVE SOME NUMBER TO ADD OR REMOVE MONEY FROM USER");
        // }

        const mon = new MessageEmbed()
        .setTitle(`${args[1]} Has Been Removed From ${user.tag}'s Account'`)
        .setColor("GREEN")
        .setFooter(' 👍 ')
        .setTimestamp()
		await message.channel.send({embeds: [mon] })
    }
}