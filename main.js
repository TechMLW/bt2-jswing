const{ Client, Intents, Collection } = require("discord.js");
const fs = require("fs");
const { token, mongoURL } = require("./config.json");
const mongoose = require("mongoose"); 

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING
    ]
})



mongoose.connect('mongodb+srv://TechMLW:Palashj06@jswing.x3yoe.mongodb.net/test', {
    useUnifiedTopology : true,
    useNewUrlParser : true, 
}).then(console.log('Connected to the MongoDB ✔️.'))



module.exports = client;
const economy = require('simply-eco/index.js');
client.eco = new economy.eco(mongoURL);
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");


["commandHandler", "eventHandler"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});



client.login(token);
