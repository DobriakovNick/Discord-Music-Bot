module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{pref}resume',
    voiceChannel: true,

    execute(client, message) {

        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Жодної музики зараз не грає ${message.author}.`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `Поточна музика ${queue.current.title} відновлена ` : `Щось трапилось не так ${message.author}. `);
    },
};