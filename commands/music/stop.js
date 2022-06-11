module.exports = {
    name: 'stop',

    aliases: ['st'],

    utilisation: '{pref}stop',

    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Жодної музики зараз не грає, ${message.author}. `);

        queue.destroy();

        message.channel.send(`Музика перестає грати на цьому сервері `);
    },
};