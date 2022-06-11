module.exports = {

    name: 'pause',

    aliases: [],

    utilisation: '{pref}pause',

    voiceChannel: true,

    execute(client, message) {

        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Жодної музики зараз не грає ${message.author}.`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `Поточна музика ${queue.current.title} зупинена ` : `Щось не так ${message.author}.`);
    },
};