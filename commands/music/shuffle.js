module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{pref}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодної музики зараз не грає, ${message.author}. `);

        if (!queue.tracks[0]) return message.channel.send(`Немає музики в черзі після поточної, ${message.author}. `);

        await queue.shuffle();

        return message.channel.send(`Черга перемішана для **${queue.tracks.length}** пісень `);
    },
};