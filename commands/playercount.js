// API imports
const config = require('../config.json');
const embedmessage = require('../commands/vars/embedmessage.json');
const Discord = require('discord.js');
const { TransportTycoon } = require('transporttycoon');
    
// Discord embed message
module.exports = {
  name: "chargesleft",
  description: "shows how many api charges are left.",
  category: "help",
  run: async (bot, message, args) => {
    const TT = new TransportTycoon(config.TT_Token, true);
        if(!args.length){
        await TT.setupCharges();
        const SI_1 = await TT.getPlayersWidget(0);
        const SI_2 = await TT.getPlayersWidget(1);
        const SI_3 = await TT.getPlayersWidget(2);
        const SI_4 = await TT.getPlayersWidget(3);
        const SI_5 = await TT.getPlayersWidget(4);
        const SI_6 = await TT.getPlayersWidget(5);
        const SI_7 = await TT.getPlayersWidget(6);
        const SI_8 = await TT.getPlayersWidget(7);
        const SI_9 = await TT.getPlayersWidget(8);
        const SI_A = await TT.getPlayersWidget(9);
        var S1F = SI_1.players.length + "/" + SI_1.server.limit;
        var S2F = SI_2.players.length + "/" + SI_2.server.limit;
        var S3F = SI_3.players.length + "/" + SI_3.server.limit;
        var S4F = SI_4.players.length + "/" + SI_4.server.limit;
        var S5F = SI_5.players.length + "/" + SI_5.server.limit;
        var S6F = SI_6.players.length + "/" + SI_6.server.limit;
        var S7F = SI_7.players.length + "/" + SI_7.server.limit;
        var S8F = SI_8.players.length + "/" + SI_8.server.limit;
        var S9F = SI_9.players.length + "/" + SI_9.server.limit;
        var SAF = SI_A.players.length + "/" + SI_A.server.limit;
        const embed = new Discord.MessageEmbed()
            .setColor(embedmessage.Embed_Color)
            .setTitle('Player counts on all servers:')
            .addField('S1 (OS):', S1F, true)
            .addField('S2:', S2F, true)
            .addField('S3:', S3F, true)
            .addField('S4:', S4F, true)
            .addField('S5 (Beta):', S5F, true)
            .addField('S6:', S6F, true)
            .addField('S7:', S7F, true)
            .addField('S8:', S8F, true)
            .addField('S9:', S9F, true)
            .addField('SA:', SAF)
            .setThumbnail(embedmessage.Thumbnail_Img)
            message.channel.send(embed);
        }
        }}