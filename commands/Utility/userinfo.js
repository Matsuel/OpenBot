const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('userinfo')
        .setDescription('Get information about a user'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('User Information')
            .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: 'Username', value: interaction.user.username, inline: true },
                { name: 'Joined Server', value: interaction.member.joinedAt.toDateString(), inline: true },
                { name: 'Account Created', value: interaction.user.createdAt.toDateString(), inline: true }
            )
            .setColor('#4613CD')
            .setFooter({ text: 'OpenBot', iconURL: 'https://media.discordapp.net/attachments/1072978699319783487/1207441489005903942/Representation_of_an_hacker__1432555634__GMluC1xWh2kc__sd_neurogen-1-0__dreamlike-art.jpg?ex=65dfa884&is=65cd3384&hm=a5132f0c73dbe7591b03fe81d86498b4a4cd3530fdc2bcd52979fc6a2348ffaa&=&format=webp&width=479&height=671' });

        await interaction.reply({ embeds: [embed] });
    }
};
