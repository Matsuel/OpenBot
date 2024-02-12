const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flag')
        .setDescription('Replies with french flag!'),
    async execute(interaction) {
        const link = 'https://restcountries.com/v3.1/name/france';
        const response = await fetch(link);
        const countries = await response.json();

        const embed = new EmbedBuilder()
            .setTitle('Flag')
            .setImage(countries[0]['flags']['png'])
            .setColor('#4613CD');
        const message = await interaction.reply({ embeds: [embed] , fetchReply: true});
        await message.react('🇫🇷').catch(console.error);
    }
}