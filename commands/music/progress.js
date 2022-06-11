module.exports = {

    name: 'progress',

    aliases: ['pbar'],

    utilisation: '{pref}progress',

    voiceChannel: true,

    async execute(client, message) {

        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодної музики зараз не грає ${message.author}. `);

        const progress = queue.createProgressBar();

        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.channel.send(`У прямому ефірі немає даних для відображення`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};