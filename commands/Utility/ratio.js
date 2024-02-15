const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ratio')
        .setDescription('Te ratio la gueule connard'),
    async execute(interaction){
        const messages= await interaction.channel.messages.fetch({limit: 1});
        const lastMessage = messages.first();
        await lastMessage.react('❤️')
        await interaction.reply('GG on a bien ratio la gueule de ce connard')
    }
}