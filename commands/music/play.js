const { QueryType } = require('discord-player');

module.exports = {

    name: 'play',

    aliases: ['p'],

    utilisation: '{pref}play [song name/URL]',

    voiceChannel: true,

    async execute(client, message, args) {

        if (!args[0]) return message.channel.send(`Будь ласка, введіть правильний запит ${message.author}.`);

        const res = await player.search(args.join(' '), {

            requestedBy: message.member,

            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Жодного результату не знайдено${message.author}. `);

        const queue = await player.createQueue(message.guild, {

            metadata: message.channel
        });

        try {

            if (!queue.connection) await queue.connect(message.member.voice.channel);

        } catch {

            await player.deleteQueue(message.guild.id);

            return message.channel.send(`Не можу під'єднатись до голосового чату ${message.author}. `);
        }

        await message.channel.send(`Завантажую ${res.playlist ? 'playlist' : 'track'}... `);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};