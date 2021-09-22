// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { TOKEN } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

//Listen for ready event
client.on('ready', () => {

    console.log('HARO is ready for deployment');
});

//Listen for message event
client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
})

client.login(TOKEN);