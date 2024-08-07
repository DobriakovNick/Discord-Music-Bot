const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {

    name: 'search',

    aliases: ['sh'],

    utilisation: '{pref}search [song name]',

    voiceChannel: true,

    async execute(client, message, args) {

        if (!args[0]) return message.channel.send(`Будь ласка, введіть правильний запрос, ${message.author}. `);

        const res = await player.search(args.join(' '), {

            requestedBy: message.member,

            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Немає результатів пошуку, ${message.author}. `);

        const queue = await player.createQueue(message.guild, {

            metadata: message.channel
        });

        const embed = new MessageEmbed();

        embed.setColor('RED');

        embed.setAuthor(`Результат для ${args.join(' ')}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const maxTracks = res.tracks.slice(0, 10);

        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nВиберіть між **1** і **${maxTracks.length}** або **cancel** `);

        embed.setTimestamp();

        embed.setFooter('Працює не чіпай', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({

            time: 45000,

            errors: ['time'],

            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {

            if (query.content.toLowerCase() === 'cancel') return message.channel.send(`Пошук відмінений `) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`Недійсна відповідь, спробуйте ввести значення від **1** до **${maxTracks.length}** або **cancel**.`);

            collector.stop();

            try {

                if (!queue.connection) await queue.connect(message.member.voice.channel);

            } catch {

                await player.deleteQueue(message.guild.id);

                return message.channel.send(`Не можу приєднатись до голосового чату, ${message.author}. `);
            }

            await message.channel.send(`Відображаю результати пошуку `);

            queue.addTrack(res.tracks[query.content - 1]);

            if (!queue.playing) await queue.play();
        });

        collector.on('end', (msg, reason) => {

            if (reason === 'time') return message.channel.send(`Час пошуку вийшов, ${message.author}.`);
        });
    },
};