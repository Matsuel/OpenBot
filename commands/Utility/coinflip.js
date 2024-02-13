const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription('Coin Flip game'),
    async execute(interaction) {
        const minCeiled = Math.ceil(0);
        const maxFloored = Math.floor(1);
        const nb_random = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
        console.log(nb_random)
        var image = ""
        var result = ""
        if (nb_random==0){
            result = "Pile"
            image = "https://media.discordapp.net/attachments/694523637457223740/1206604961673248799/Sans_titre.png?ex=65dc9d70&is=65ca2870&hm=8ed59c8862616d0f1de1fe20584782198e0f089f6198ceaf4244be0a2fdf74f9&=&format=webp&quality=lossless&width=187&height=187"
        } else {
            result = "Face"
            image = "https://media.discordapp.net/attachments/694523637457223740/1206604985932976210/Sans_titre.png?ex=65dc9d76&is=65ca2876&hm=08c689d5f84e4ab030594b6590b42265cd564b18c9794119801bb9a3b8ac27d1&=&format=webp&quality=lossless&width=187&height=187"
        }

        const embed = new EmbedBuilder()
            .setTitle('Coinflip')
            .setDescription(result)
            .setImage(image)
            .setColor('#4613CD')
            .setFooter({ text: 'OpenBot', iconURL: 'https://wallpapers-clan.com/wp-content/uploads/2023/11/star-wars-darth-maul-black-red-desktop-wallpaper-preview.jpg'});
            
        await interaction.reply({ embeds: [embed] });
    }
}