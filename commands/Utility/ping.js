const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies the ping between the bot and the server.'),
    async execute (interaction) {
        interaction.reply(`👌 Ping between you and server is ${CalculPing(interaction)}`)
    }
}

function CalculPing(interaction) {
    let ping = Date.now() - interaction.createdTimestamp;
    ping < 0 ? ping*=-1:ping
    return ping;
}