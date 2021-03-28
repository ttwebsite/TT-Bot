// API imports
const config = require('../config.json');
const embedmessage = require('../commands/vars/embedmessage.json');
const Discord = require('discord.js');
const { TransportTycoon } = require('transporttycoon');
    
// Discord embed message
module.exports = {
  name: "weather",
  description: "shows the weather on all servers",
  category: "help",
  run: async (bot, message, args) => {
    const TT = new TransportTycoon(config.TT_Token, true);
        if(!args.length){
        await TT.setupCharges();
        const m1 = await TT.getCurrentWeather(0);
        const m2 = await TT.getCurrentWeather(1);
        const m3 = await TT.getCurrentWeather(2);
        const m4 = await TT.getCurrentWeather(3);
        const m5 = await TT.getCurrentWeather(4);
        const m6 = await TT.getCurrentWeather(5);
        const m7 = await TT.getCurrentWeather(6);
        const m8 = await TT.getCurrentWeather(7);
        const m9 = await TT.getCurrentWeather(8);
        const m10 = await TT.getCurrentWeather(9);
        var m1w = m1.current_weather;
        var m1wf = m1w.charAt(0).toUpperCase() + m1w.slice(1)
        var m2w = m2.current_weather;
        var m2wf = m2w.charAt(0).toUpperCase() + m2w.slice(1)
        var m3w = m3.current_weather;
        var m3wf = m3w.charAt(0).toUpperCase() + m3w.slice(1)
        var m4w = m4.current_weather;
        var m4wf = m4w.charAt(0).toUpperCase() + m4w.slice(1)
        var m5w = m5.current_weather;
        var m5wf = m5w.charAt(0).toUpperCase() + m5w.slice(1)
        var m6w = m6.current_weather;
        var m6wf = m6w.charAt(0).toUpperCase() + m6w.slice(1)
        var m7w = m7.current_weather;
        var m7wf = m7w.charAt(0).toUpperCase() + m7w.slice(1)
        var m8w = m8.current_weather;
        var m8wf = m8w.charAt(0).toUpperCase() + m8w.slice(1)
        var m9w = m9.current_weather;
        var m9wf = m9w.charAt(0).toUpperCase() + m9w.slice(1)
        var m10w = m10.current_weather;
        var m10wf = m10w.charAt(0).toUpperCase() + m10w.slice(1)
        const embed = new Discord.MessageEmbed()
            .setColor(embedmessage.Embed_Color)
            .setTitle('Current weather on all servers:')
            .setThumbnail(embedmessage.Thumbnail_Img)
            .addField('S1 (OS)', m1wf, true)
            .addField('S2', m2wf, true)
            .addField('S3', m3wf, true)
            .addField('S4', m4wf, true)
            .addField('S5 (Beta)', m5wf, true)
            .addField('S6', m6wf, true)
            .addField('S7', m7wf, true)
            .addField('S8', m8wf, true)
            .addField('S9', m9wf, true)
            .addField('SA', m10wf, true)
            .setFooter('To see individual servers, use q/weather <server number>');
            message.channel.send(embed);
        }
        else if (args[0] === '1'){
            await TT.setupCharges();
            const s1 = await TT.getCurrentWeather(0)
            var s1cw = s1.current_weather;
            var s1cwc = s1cw.charAt(0).toUpperCase() + s1cw.slice(1)
            var s1m = Math.floor(s1.time_remaining / 60);
            var s1s = s1.time_remaining - s1m * 60;
            var s1t = s1m + " minutes and " + s1s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 1 (OneSync):')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s1cwc },
                    { name: 'Time remaining:', value: s1t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === 'os'){
            await TT.setupCharges();
            const s1 = await TT.getCurrentWeather(0)
            var s1cw = s1.current_weather;
            var s1cwc = s1cw.charAt(0).toUpperCase() + s1cw.slice(1)
            var s1m = Math.floor(s1.time_remaining / 60);
            var s1s = s1.time_remaining - s1m * 60;
            var s1t = s1m + " minutes and " + s1s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 1 (OneSync):')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s1cwc },
                    { name: 'Time remaining:', value: s1t }
                )
            message.channel.send(embed);
        }

        else if (args[0] === '2'){
            await TT.setupCharges();
            const s2 = await TT.getCurrentWeather(1)
            var s2cw = s2.current_weather;
            var s2cwc = s2cw.charAt(0).toUpperCase() + s2cw.slice(1)
            var s2m = Math.floor(s2.time_remaining / 60);
            var s2s = s2.time_remaining - s2m * 60;
            var s2t = s2m + " minutes and " + s2s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 2:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s2cwc },
                    { name: 'Time remaining:', value: s2t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === '3'){
            await TT.setupCharges();
            const s3 = await TT.getCurrentWeather(2)
            var s3cw = s3.current_weather;
            var s3cwc = s3cw.charAt(0).toUpperCase() + s3cw.slice(1)
            var s3m = Math.floor(s3.time_remaining / 60);
            var s3s = s3.time_remaining - s3m * 60;
            var s3t = s3m + " minutes and " + s3s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 3:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s3cwc },
                    { name: 'Time remaining:', value: s3t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === '4'){
            await TT.setupCharges();
            const s4 = await TT.getCurrentWeather(3)
            var s4cw = s4.current_weather;
            var s4cwc = s4cw.charAt(0).toUpperCase() + s4cw.slice(1)
            var s4m = Math.floor(s4.time_remaining / 60);
            var s4s = s4.time_remaining - s4m * 60;
            var s4t = s4m + " minutes and " + s4s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 4:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s4cwc },
                    { name: 'Time remaining:', value: s4t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === 'beta'){
            await TT.setupCharges();
            const s5 = await TT.getCurrentWeather(4)
            var s5cw = s5.current_weather;
            var s5cwc = s5cw.charAt(0).toUpperCase() + s5cw.slice(1)
            var s5m = Math.floor(s5.time_remaining / 60);
            var s5s = s5.time_remaining - s5m * 60;
            var s5t = s5m + " minutes and " + s5s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 5 (Beta):')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s5cwc },
                    { name: 'Time remaining:', value: s5t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === '5'){
            await TT.setupCharges();
            const s5 = await TT.getCurrentWeather(4)
            var s5cw = s5.current_weather;
            var s5cwc = s5cw.charAt(0).toUpperCase() + s5cw.slice(1)
            var s5m = Math.floor(s5.time_remaining / 60);
            var s5s = s5.time_remaining - s5m * 60;
            var s5t = s5m + " minutes and " + s5s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 5 (Beta):')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s5cwc },
                    { name: 'Time remaining:', value: s5t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === '6'){
            await TT.setupCharges();
            const s6 = await TT.getCurrentWeather(5)
            var s6cw = s6.current_weather;
            var s6cwc = s6cw.charAt(0).toUpperCase() + s6cw.slice(1)
            var s6m = Math.floor(s6.time_remaining / 60);
            var s6s = s6.time_remaining - s6m * 60;
            var s6t = s6m + " minutes and " + s6s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 6:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s6cwc },
                    { name: 'Time remaining:', value: s6t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === '7'){
            await TT.setupCharges();
            const s7 = await TT.getCurrentWeather(6)
            var s7cw = s7.current_weather;
            var s7cwc = s7cw.charAt(0).toUpperCase() + s7cw.slice(1)
            var s7m = Math.floor(s7.time_remaining / 60);
            var s7s = s7.time_remaining - s7m * 60;
            var s7t = s7m + " minutes and " + s7s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 7:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s7cwc },
                    { name: 'Time remaining:', value: s7t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === '8'){
            await TT.setupCharges();
            const s8 = await TT.getCurrentWeather(7)
            var s8cw = s8.current_weather;
            var s8cwc = s8cw.charAt(0).toUpperCase() + s8cw.slice(1)
            var s8m = Math.floor(s8.time_remaining / 60);
            var s8s = s8.time_remaining - s8m * 60;
            var s8t = s8m + " minutes and " + s8s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 8:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s8cwc },
                    { name: 'Time remaining:', value: s8t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === '9'){
            await TT.setupCharges();
            const s9 = await TT.getCurrentWeather(8)
            var s9cw = s9.current_weather;
            var s9cwc = s9cw.charAt(0).toUpperCase() + s9cw.slice(1)
            var s9m = Math.floor(s9.time_remaining / 60);
            var s9s = s9.time_remaining - s9m * 60;
            var s9t = s9m + " minutes and " + s9s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server 9:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s9cwc },
                    { name: 'Time remaining:', value: s9t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === 'a'){
            await TT.setupCharges();
            const s101 = await TT.getCurrentWeather(9)
            var s101cw = s101.current_weather;
            var s101cwc = s101cw.charAt(0).toUpperCase() + s101cw.slice(1)
            var s101m = Math.floor(s101.time_remaining / 60);
            var s101s = s101.time_remaining - s101m * 60;
            var s101t = s101m + " minutes and " + s101s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server A:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s101cwc },
                    { name: 'Time remaining:', value: s101t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === 'A'){
            await TT.setupCharges();
            const s102 = await TT.getCurrentWeather(9)
            var s102cw = s102.current_weather;
            var s102cwc = s102cw.charAt(0).toUpperCase() + s102cw.slice(1)
            var s102m = Math.floor(s102.time_remaining / 60);
            var s102s = s102.time_remaining - s102m * 60;
            var s102t = s102m + " minutes and " + s102s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server A:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s102cwc },
                    { name: 'Time remaining:', value: s102t }
                )
            message.channel.send(embed);
        }
        else if (args[0] === '10'){
            await TT.setupCharges();
            const s10 = await TT.getCurrentWeather(9)
            var s10cw = s10.current_weather;
            var s10cwc = s10cw.charAt(0).toUpperCase() + s10cw.slice(1)
            var s10m = Math.floor(s10.time_remaining / 60);
            var s10s = s10.time_remaining - s10m * 60;
            var s10t = s10m + " minutes and " + s10s + " seconds." 
            const embed = new Discord.MessageEmbed()
                .setColor(embedmessage.Embed_Color)
                .setTitle('Server A:')
                .setThumbnail(embedmessage.Thumbnail_Img)
                .addFields(
                    { name: 'Current weather:', value: s10cwc },
                    { name: 'Time remaining:', value: s10t }
                )
            message.channel.send(embed);
        }
        }
  }