const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flop')
        .setDescription('TFaire flop ce connard')
        .addStringOption((option)=>
            option
            .setName('message')
            .setDescription('Message à écire')
            .setRequired(true)
        ),
    async execute(interaction){
        const message = interaction.options.getString('message');
        await interaction.reply(`${message}`)
        const messages= await interaction.channel.messages.fetch({limit: 1});
        const lastMessage = messages.first();
        await lastMessage.react('❤️')
    }
}