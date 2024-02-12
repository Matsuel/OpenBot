const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Nettoie les messages qui sont relous')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .addIntegerOption((option)=>
            option
            .setName('count')
            .setDescription('Nombre de messages à supprimer')
            .setRequired(true)
        ),
        async execute(interaction){
            const count = interaction.options.getInteger('count');
            await interaction.channel.messages.fetch({limit:count}).then(msgs => {
                interaction.channel.bulkDelete(msgs)
            });
            interaction.reply(`✅ Les ${count} messages ont bien été supprimé`)
        }
}