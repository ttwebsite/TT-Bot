const Discord = require('discord.js');
module.exports = {
  name: "help",
  description: "toont alle commando's",
  category: "help",
  run: async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setColor('#B33C29')
        .setTitle('All commands:')
        .setThumbnail('https://media.discordapp.net/attachments/623228003119398913/747879612092252280/01.png?width=677&height=677')
        .setAuthor('Deanbot', 'https://media.discordapp.net/attachments/623228003119398913/747879612092252280/01.png?width=677&height=677')
        .addFields(
            { name: 'Moderation:', value: '``q/ban <user> <reason>``, ``q/kick <user> <reason>``, ``q/clear <message amount>``, ``q/installbot``' },
        )
        message.channel.send(embed);

  }
}