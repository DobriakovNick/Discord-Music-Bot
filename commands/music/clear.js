module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{pref}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодної музики зараз не грає ${message.author}..Спробуйте ще раз.. `);

        if (!queue.tracks[0]) return message.channel.send(`Немає музики в черзі після поточної ${message.author}.. Спробуйте ще раз.. `);

        await queue.clear();

        message.channel.send(`Чергу щойно очистили `);
    },
};